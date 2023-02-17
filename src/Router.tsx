import Home from "./pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

// main app router
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);
