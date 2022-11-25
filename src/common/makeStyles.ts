import { createMakeStyles } from "tss-react";
import type { CSSObject as TssObject } from "tss-react";

const tss = createMakeStyles({ useTheme: () => null }).makeStyles;

export type CSSObject = TssObject;
type Props<K extends string> = { [k in K]: CSSObject | Props<string> };

export const makeStyles = <RuleName extends string>(props: Props<RuleName>) => {
  const hook = tss()(props);
  return () => hook().classes as Record<RuleName, string>;
};

export const clsx = (...args: unknown[]): string =>
  args
    .map((item) => {
      if (Array.isArray(item)) return clsx(...item);
      if (typeof item === "object") {
        if (item)
          return Object.entries(item)
            .reduce((acc, [key, sub]) => {
              if (typeof sub === "function" && sub()) acc.push(key);
              else if (sub) acc.push(key);
              return acc;
            }, [] as string[])
            .join(" ");
      }
      if (typeof item === "function") return `${item()}`;
      if (item) return `${item}`;
      return false;
    })
    .filter((item) => !!item)
    .join(" ");
