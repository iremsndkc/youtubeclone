import React from "react";
import { categories } from "../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <Link to={"/"} key={i}>
          <div 
          className={`flex gap-2 py-4 px-2 hover:bg-[#2D2D2D] md:text-lg 
          items-center md:px-3 cursor-pointer rounded-md`}>
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>

          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
