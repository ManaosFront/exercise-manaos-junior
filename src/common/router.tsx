import React from "react";
import { Routes, PathRouteProps, Route, BrowserRouter } from "react-router-dom";

export type RouteComponentProps = {
  "data-testid"?: string;
  children?: React.ReactNode;
};

export type RouteProps = Omit<PathRouteProps, "id"> & {
  id: string;
  layout?: React.FC<RouteComponentProps>;
  component: React.FC<RouteComponentProps>;
  icon?: React.FC;
  title?: string;
};

export type RouterProps = {
  routes: RouteProps[] | readonly RouteProps[];
};

export const Router: React.FC<RouterProps> = ({ routes }) => (
  <BrowserRouter>
    <Routes>
      {routes.map(
        ({ layout: Layout, component: Component, id, children, ...rest }) => (
          <Route
            key={id}
            id={id}
            element={
              Layout ? (
                <Layout>
                  <Component data-testid={id}>{children}</Component>
                </Layout>
              ) : (
                <Component data-testid={id}>{children}</Component>
              )
            }
            {...rest}
          />
        )
      )}
    </Routes>
  </BrowserRouter>
);
