import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";

// main app router
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);
