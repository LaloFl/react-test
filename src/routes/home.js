import { lazy } from "react";
const HomePage = lazy(() => import("pages/HomePage"));

export const routes = [
  {
    path: "/home/",
    component: HomePage,
    exact: true
  },
];
