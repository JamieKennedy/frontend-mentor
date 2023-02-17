import { createBrowserRouter, createHashRouter } from "react-router-dom";

import Home from "./pages/home/Home";

// main app router
export const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
]);
