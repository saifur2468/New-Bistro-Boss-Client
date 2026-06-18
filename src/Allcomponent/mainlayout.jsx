// src/Allcomponent/mainlayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Home/navbar";
import Footer from "./Home/footer";


export default function MainLayout() {
  return (
    <div>
      <Navbar />
     
        <Outlet />
     
      <Footer></Footer>
    </div>
  );
}
