import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout & Pages
import MainLayout from "./Allcomponent/mainlayout";
import ErrorPage from "./Allcomponent/ERRor";
import Hero from "./Allcomponent/Home/hero";
import Contact from "./Allcomponent/Home/contact";
import Login from "./Allcomponent/AuthSection/login";
import Singup from "./Allcomponent/AuthSection/signup";
import ProductOrder from "./Allcomponent/Home/ProductOrder";
import Menucard from "./Allcomponent/Home/Menucard";

// Dashboard
import Dashboard from "./Allcomponent/DashbordRoute/Dashboard";
import UserHome from "./Allcomponent/DashbordRoute/UserRoute/UserHome";

// Auth
import AuthProvider from "./Allcomponent/AuthSection/Authprovider";
import Reservation from "./Allcomponent/DashbordRoute/UserRoute/TabelBooking";
import Payment from "./Allcomponent/DashbordRoute/UserRoute/Payment";

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
        element: <ProductOrder />,
      },
      {
        path: "/Menucard",
        element: <Menucard />,
      },

      // ✅ DASHBOARD (IMPORTANT: nested)
      {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "userHome",
            element: <UserHome />,
          },
          {
path:"Reservation",
element:<Reservation></Reservation>,
          },
          {
            path:"Payment",
            element:<Payment></Payment>,
          },
          {
            path: "orders",
            element: <div>Orders Page</div>,
          },
          {
            path: "settings",
            element: <div>Settings Page</div>,
          },
        ],
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);