import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";

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
        }
      ]
    },
  ]);

  export default router;