import { PlaylistPlay, TableView, Timeline } from "@mui/icons-material";
import { RouteProps } from "../common/router";
import { MainLayout } from "../components/MainLayout/MainLayout";
import { DashboardPage } from "../page/dashboard/DashboardPage";
import { DocumentsPage } from "../page/documents/Documents";
import { ExamplePage } from "../page/example/ExamplePage";
import { MyListsPage } from "../page/myLists/MyLists";

const rawRoutes = [
  {
    id: "example",
    path: "*",
    component: ExamplePage,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    layout: MainLayout,
    component: DashboardPage,
    icon: Timeline,
    title: "Dashboard",
  },
  {
    id: "my-lists",
    path: "/my-lists",
    layout: MainLayout,
    component: MyListsPage,
    icon: PlaylistPlay,
    title: "My Lists",
  },
  {
    id: "documents",
    path: "/documents",
    layout: MainLayout,
    component: DocumentsPage,
    icon: TableView,
    title: "Documents",
  },
] as const;

export const routes = rawRoutes as readonly RouteProps[];
export const getRoute = (key: typeof rawRoutes[number]["id"]): RouteProps =>
  routes.find((route) => route.id === key)!;
