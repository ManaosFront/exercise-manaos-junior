import { RouteProps } from "../common/router";
import { ExamplePage } from "../page/example/ExamplePage";
import { DocumentsView } from "../page/document/DocumentsView";

export const routes: RouteProps[] = [
  {
    id: "example",
    path: "*",
    component: ExamplePage,
  },
  {
    id: "header",
    path: "/document",
    component: DocumentsView,
  },
];
