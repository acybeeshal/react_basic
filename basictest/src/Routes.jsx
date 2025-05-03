import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path : "/",
        element : <h1>haha</h1>
    },
    {
        path: "/about",
        element : <h1>about page</h1>
    },{
        path:"/biswas"
    }
]);

export default router;