import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ToyDetails from "../pages/toyDetails/toyDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'allToys',
            element:<AllToys></AllToys>
        },
        {
            path:'myToys',
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path:'addToy',
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:'blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'updateToy/:id',
            loader:({params})=>fetch(`https://toy-marketplace-assignment-11-server.vercel.app/toy/${params.id}`),
            element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>
        },
        {
            path:'details/:id',
            loader:({params})=>fetch(`https://toy-marketplace-assignment-11-server.vercel.app/details/${params.id}`),
            element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;