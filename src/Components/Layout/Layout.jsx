import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import style from "./Layout.module.scss"

export default function Layout() {
  const [show, setshow] = useState(true);

  return (
    <>
    <div className="flex flex-column  justify-between">
 
      <div className="flex h-screen ">
        <Navbar />
        <div className={`w-100 ${style.padding}  `}>
         
          <Outlet />
          
        </div>
      </div>
    <Footer /> 
    </div>
    </>
  );
}
