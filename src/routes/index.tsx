import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";
import Crew from "../pages/crew";
import Technology from "../pages/technology";
import Destination from "../pages/destination";



const routes   = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        children : [
            {
                index : true,
                element : <Home />,
            },
            {
                path : '/destination',
                element : <Destination />,
            },
            {
                path : '/crew',
                element : <Crew />,
            },
            {
                path : '/technology',
                element : <Technology />,
            },
           
        ]
    }
])


export default routes