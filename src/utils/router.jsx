import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";

import AddTutorials from "../pages/AddTutorials"
import MyTutorials from "../pages/MyTutorials";
import UpdateTutorials from "../components/UpdateTutorials";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                
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
                path: "/addtutorials",
                element: <AddTutorials></AddTutorials>
            },
            {
                path: "/mytutorials",
                element: <MyTutorials></MyTutorials>
            },
            
            {
                path: "/updatetorials/:id",
                element: <UpdateTutorials></UpdateTutorials>,
                loader: ({ params }) => fetch(`http://localhost:5000/language/${params.id}`)
            },

           
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])

export default router;