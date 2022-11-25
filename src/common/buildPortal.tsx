import React from "react";
import ReactDOM from "react-dom";
import { useWaitNoThrow } from "./useWaitNoThrow";
import { generateKey } from "./util";

export const buildPortal = (id = generateKey()) => {
  return [
    ((htmlDivAttributes) => <div {...htmlDivAttributes} id={id} />) as React.FC<
      Omit<React.HTMLAttributes<HTMLDivElement>, "id">
    >,
    (({ children }) => {
      const portal = useWaitNoThrow(() => {
        const ref = document.getElementById(id);
        if (ref) return ref;
        throw new Error(
          `Can't find element id ${JSON.stringify(id)} in actual DOM tree`
        );
      });
      if (!portal) return null;
      return ReactDOM.createPortal(children, portal);
    }) as React.FC<{ children?: React.ReactNode }>,
  ] as const;
};
