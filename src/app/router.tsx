import {useLayoutEffect, useMemo} from "react";
import {createBrowserRouter, Outlet, useLocation} from "react-router";
import {RouterProvider} from "react-router/dom";
import {paths} from "@/config/paths";

import Home from "@/app/routes";

import About from "@/app/routes/about";

const RootLayout = () => {
    const {pathname} = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <Outlet/>;
};

export const createAppRouter = () =>
    createBrowserRouter([
        {
            element: <RootLayout/>,
            children: [
                {
                    path: paths.home.path,
                    element: <Home/>,
                },
                {
                    path: paths.about.path,
                    element: <About/>,
                },
                {path: "*", element: <span>404 - not found</span>}
            ]
        },
    ]);

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);
    return <RouterProvider router={router}/>;
};