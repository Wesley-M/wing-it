import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "@mui/material";
import {theme} from "./themes/theme.js";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import {Root} from "./Root.jsx";
import OverviewPage from "./pages/overview.mdx";
import ButtonPage from "./pages/button.mdx";
import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <OverviewPage/>},
      {path: "button", element: <ButtonPage/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
