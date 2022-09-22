import React from "react";
import { Routes, PathRouteProps, Route, BrowserRouter } from "react-router-dom";

export type RouteComponentProps = {
  "data-testid"?: string;
  children?: React.ReactNode;
};

export type RouteProps = Omit<PathRouteProps, "id"> & {
  id: string;
  component: React.FC<RouteComponentProps>;
};

export type RouterProps = {
  routes: RouteProps[];
};

export const Router: React.FC<RouterProps> = ({ routes }) => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ component, id, children, ...rest }) => (
        <Route
          key={id}
          id={id}
          element={component({ "data-testid": id, children })}
          {...rest}
        />
      ))}
    </Routes>
  </BrowserRouter>
);
