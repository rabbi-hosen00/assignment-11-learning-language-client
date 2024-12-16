import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AddEquipment from "../pages/AddEquipment";
import PrivateRoute from "./PrivateRoute";
import AllSports from "../components/AllSports";
import ViewDetails from "../pages/ViewDetails";
import MyEquipmentList from "../pages/MyEquipmentList";
import UpdatePage from "../pages/UpdatePage";
import ErrorPage from "../components/ErrorPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-lotas-server.vercel.app/sports')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/addequipment",
                element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>,
            },
            {
                path: "/allSports",
                element: <AllSports></AllSports>,
            },
            {
                path: "/sports/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-lotas-server.vercel.app/sports/${params.id}`)
            },
            {
                path: "/myequipment",
                element: <PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>,

            },
            {
                path: "/update/:id",
                element: <PrivateRoute> <UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-lotas-server.vercel.app/sports/${params.id}`)
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])

export default router;