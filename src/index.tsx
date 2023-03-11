import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import * as Routes from "./routes";

const element = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(element);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Routes.Main />,
        children: [

        ]
    },
    {
        path: "login",
        element: <Routes.Login />
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
