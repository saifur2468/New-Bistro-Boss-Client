// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'


import MainLayout from './Allcomponent/mainlayout';
import ErrorPage from './Allcomponent/ERRor';
import Hero from './Allcomponent/Home/hero'; 
import Contact from './Allcomponent/Home/contact';
// import Order from './Allcomponent/Home/order';
import Login from './Allcomponent/AuthSection/login';
import Singup from './Allcomponent/AuthSection/signup';
import ProductOrder from './Allcomponent/Home/ProductOrder';
import Menucard from './Allcomponent/Home/Menucard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Hero />, 
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ProductOrder",
        element: <ProductOrder></ProductOrder>,
      },
      {
path:"/Menucard",
element:<Menucard></Menucard>
      },
      
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Singup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)