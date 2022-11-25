import React, { useState } from "react";
import { globalStateContext, dispatchStateContext } from "./common";

export type SetState<T> = (updater: T | ((current: T) => T)) => void;

const defaultGlobalState: AnyObject = {};

type GlobalStateProviderProps<T extends AnyObject = AnyObject> = {
  init?: T;
  children?: React.ReactNode;
};

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = <
  T extends AnyObject = AnyObject
>({
  init,
  children,
}: GlobalStateProviderProps) => {
  const [state, setState] = useState(init ?? defaultGlobalState);
  return (
    <globalStateContext.Provider value={state as T}>
      <dispatchStateContext.Provider value={setState}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};
