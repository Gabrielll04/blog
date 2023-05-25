import { createBrowserRouter } from "react-router-dom";

import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: '/blog',
        element: <p>Welcome to my blog</p>
    }
]);