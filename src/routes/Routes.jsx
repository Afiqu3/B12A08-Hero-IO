import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Root from "../pages/Root/Root";
import axios from "axios";
import AppsPage from "../pages/Appss/AppsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      { index: true, Component: Root, loader: () => axios("/appData.json") },
      {
        path: "/apps",
        Component: AppsPage,
        loader: () => axios("/appData.json"),
      },
    ],
  },
]);
