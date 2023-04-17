import React from "react";
import {Root} from "../Root.jsx";
import {ButtonP, NavbarP, NotificationP, OverviewP} from "./index.js";

const routes = [
  {index: true, element: <OverviewP/>, label: "Overview"},
  {path: "button", element: <ButtonP/>, label: "Button"},
  {path: "notification", element: <NotificationP/>, label: "Notification"},
  {path: "navbar", element: <NavbarP/>, label: "Navbar"}
]

const routerTemplate = [
  {
    path: "/",
    element: <Root/>,
    children: routes
  },
]

/**
 * It returns the routes in the format: {name: Route's Label, to: Route's Link}
 * */
const getRouteLinks = () => {
  return routes.map(r => ({name: r.label, to: `/${r.path || ''}`}))
}

export {
  routerTemplate,
  getRouteLinks
}
