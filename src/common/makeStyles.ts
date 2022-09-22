import { createMakeStyles } from "tss-react";
import type { CSSObject as TssObject } from "tss-react";

const tss = createMakeStyles({ useTheme: () => null }).makeStyles;

export type CSSObject = TssObject;
type Props<K extends string> = { [k in K]: CSSObject | Props<string> };

export const makeStyles = <RuleName extends string>(props: Props<RuleName>) => {
  const hook = tss()(props);
  return () => hook().classes as Record<RuleName, string>;
};
