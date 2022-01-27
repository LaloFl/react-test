import { lazy } from "react";
const HomePage = lazy(() => import("pages/HomePage"));
const Styled = lazy(() =>import("pages/Styled"))
export const routes = [
  {
    path: "/home/",
    component: HomePage,
    exact: true
  },
  {
    path: "/home/styled",
    component: Styled,
    exact: true
  }
];
