import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";

import AddTutorials from "../pages/AddTutorials"
import MyTutorials from "../pages/MyTutorials";
import UpdateTutorials from "../components/UpdateTutorials";
import FindTutors from "../pages/FindTutors";
import TutorsDetails from "../pages/TutorsDetails";
import BookedTutor from "../pages/BookedTutor";
import FindTutor from "../pages/FindTutor";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
            },
            {
                path: "/mytutorials",
                element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
            },
            {
                path: "/find-tutors/:category",
                element: <FindTutor></FindTutor>
            },
            {
                path: "/findtutors",
                element: <FindTutors></FindTutors>
            },
            
            {
                path: "/updatetorials/:id",
                element: <UpdateTutorials></UpdateTutorials>,
                loader: ({ params }) => fetch(`http://localhost:5000/language/${params.id}`)
            },

            {
                path: "/details/:id",
                element: <PrivateRoute><TutorsDetails></TutorsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/language/${params.id}`)
            },
            {
                path: "/bookedtutors",
                element: <PrivateRoute><BookedTutor></BookedTutor></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/booked-tutor")
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])

export default router;