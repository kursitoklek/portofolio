import React from "react";
import Gmail from "./gmail.png";

function Floating() {
  return (
    <div className="group fixed bottom-0 right-0 p-4 flex w-auto items-end justify-end z-10">
      <div className="text-white shadow-xl flex items-center justify-center p-3 rounded bg-black">
        <a href="" className="flex flex-row w-full max-sm:hidden max-md:hidden">Contact Me Now </a> 
        <a href="" className="xl:hidden lg:hidden 2xl:hidden w-10"><img src={Gmail} alt="" /></a>
      </div>      
    </div>
  );
}

export default Floating;
