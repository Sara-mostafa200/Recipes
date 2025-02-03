import React from "react";
import style from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={` bg-black text-white flex items-center justify-center  ${style.footer} `}>
      <div className={`  p-3 `}>© 2025 Sara Elhadad. All Rights Reserved.</div>
    </div>
  );
}
