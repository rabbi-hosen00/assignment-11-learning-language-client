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




const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/sports')
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
                loader: ({params}) => fetch(`http://localhost:5000/sports/${params.id}`)
            },
            {
                path: "/myequipment",
                element: <PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>,

            },
            {
                path: "/update/:id",
                element: <PrivateRoute> <UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/sports/${params.id}`)
            },
        ]
    }
])

export default router;