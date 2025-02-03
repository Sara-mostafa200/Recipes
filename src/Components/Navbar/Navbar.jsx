import React from "react";
import { useState } from "react";
import style from "./navbar.module.scss";
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  const [NavToggle, setNavToggle] = useState("hidden");
  const [IconToggle, setIconToggle,] = useState("block");

  function Toggle() {
    if (IconToggle == "block") {
      setNavToggle("block");
      
    } else {
      setNavToggle("hidden");
    }
  }

  function navChange(e){
   if (e.target == e.currentTarget)  {
    setNavToggle("hidden");    
   }  
  }

  return (
    <div className={`${style.nav}  `}>
      <div
        
        className={`${style.smallShow} absolute  w-100 p-1  `}
      >
        
        <i onClick={() => Toggle()}  className={` ${IconToggle}   pointer fa-solid fa-bars`}></i>
         <div onClick={(e) => navChange(e)} className={`lightBoxContainer ${NavToggle}   h-screen  ${style.navPosition}    ${style.lightBoxContainer}`}>
           <div className={`bg-backGray w-60 h-screen `}>
           <div className={`flex flex-column items-center  justify-center text-center`}>
          <h2  className={ `${style.title}  my-2  text-black mx-3  `}> Adventure of <span className="text-yellow">Delicacies</span> </h2>
          <NavLink to="/"className="btn-black text-white text-18 my-1 px-5 smoothe"> <i class="fa-solid fa-plate-wheat"></i> Meal </NavLink>
          <Link to="/" className="btn-black text-white text-18 my-1 smoothe"><i class="fa-solid fa-utensils"></i> Ingredients</Link>
          <Link to="/" className="btn-black text-white text-18 my-1 px-5 smoothe"><i class="fa-solid fa-cookie"></i> Area </Link>
        </div>
        </div>
         </div>
       
      </div>
      <div className={`${style.lgShow}  ${style.navFixed}  h-screen bg-backGray }`}>
        <div className={`flex flex-column items-center my-3 justify-center text-center`}>
          <h2  className={ `${style.title}  my-2  text-black mx-3  `}> Adventure of <span className="text-yellow">Delicacies</span> </h2>
          <NavLink to="/" className="btn-black text-white text-18 my-1 px-5 smoothe"> <i class="fa-solid fa-plate-wheat"></i> Meal </NavLink>
          <Link to="/" className="btn-black text-white text-18 my-1 smoothe"><i class="fa-solid fa-utensils"></i> Ingredients</Link>
          <Link to="/" className="btn-black text-white text-18 my-1 px-5 smoothe"><i class="fa-solid fa-cookie"></i> Area </Link>
        </div>
      </div>
    </div>
  );
}
