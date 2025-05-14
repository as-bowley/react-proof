import { useMemo } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { paths } from "@/config/paths";

import Home from "@/app/routes";
import About from "@/app/routes/about";

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: paths.home.path,
            element: <Home />,
        },
        {
            path: paths.about.path,
            element: <About />,
        },
        { path: "*", element: <span>404 - not found</span> },
    ]);

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);
    return <RouterProvider router={router} />;
};