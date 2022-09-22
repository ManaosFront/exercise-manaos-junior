import { RouteProps } from "../common/router";
import { ExamplePage } from "../page/example/ExamplePage";

export const routes: RouteProps[] = [
  {
    id: "example",
    path: "*",
    component: ExamplePage,
  },
];
