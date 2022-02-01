import { lazy } from "react";
const HomePage = lazy(() => import("pages/HomePage"));
const Styled = lazy(() => import("pages/Styled"));
const Login = lazy(() => import("pages/Login"));
const Fetch = lazy(() => import("pages/Fetch"));
export const routes = [
  {
    path: "/home/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/fetch/",
    component: Fetch,
    exact: true,
  },
  {
    path: "/home/styled",
    component: Styled,
    exact: true,
  },
  {
    path: "/home/login",
    component: Login,
    exact: true,
  },
];
