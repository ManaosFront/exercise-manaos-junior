import { useCallback, createContext, useContext, useMemo } from "react";
import { generateKey as generateKeyString } from "../../common/util";

export type SetState<T> = (updater: T | ((current: T) => T)) => void;
type Dispatch<T extends AnyObject = AnyObject> = (
  updater: (current: T) => T
) => void;

const defaultGlobalState: AnyObject = {};
export const globalStateContext = createContext(defaultGlobalState);
export const dispatchStateContext = createContext<Dispatch>(
  undefined as unknown as Dispatch
);

const generateKey = () => Symbol(generateKeyString());
const isUpdaterFunction = <T = unknown>(el: unknown): el is (state: T) => T =>
  typeof el === "function";

const useGlobalState = <T extends AnyObject>() =>
  [
    useContext(globalStateContext) as T,
    useContext(dispatchStateContext) as SetState<T>,
  ] as const;

export const makeGlobalState =
  <T = unknown>(symbol = generateKey()) =>
  () => {
    const [state, setState] = useGlobalState<Record<symbol, T>>();
    if (!setState)
      throw new Error("You are not in GlobalStateProvider context");
    const setTargetState = useCallback<SetState<T>>(
      (fn: T | ((current: T) => T)) =>
        setState((current) => ({
          ...current,
          [symbol]: isUpdaterFunction<T>(fn) ? fn(current[symbol]) : fn,
        })),
      [setState]
    );
    return useMemo(
      () =>
        [state[symbol], setTargetState] as readonly [
          undefined | T,
          SetState<T>
        ],
      [setTargetState, state]
    );
  };

export const useClearGlobalState = () => {
  const [, setState] = useGlobalState<Record<symbol, unknown>>();
  return useCallback(() => setState(() => ({})), [setState]);
};
