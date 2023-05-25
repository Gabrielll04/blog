import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import BlogPage from "../pages/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: '/blog',
        element: <BlogPage />
    }
]);