import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "@mui/material";
import {theme} from "./themes/theme.js";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {routerTemplate} from "./pages/routes.jsx";

const router = createHashRouter(routerTemplate);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
