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

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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
            element:<MyToys></MyToys>
        },
        {
            path:'addToy',
            element:<AddToy></AddToy>
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
            loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`),
            element:<UpdateToy></UpdateToy>
        },
        {
            path:'details/:id',
            loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`),
            element:<ToyDetails></ToyDetails>
        }
      ]
    },
  ]);

  export default router;