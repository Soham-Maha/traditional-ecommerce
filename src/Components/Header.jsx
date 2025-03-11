import React from "react";

const Header = () => {
  return (
    <div className="bg-[#B96463] flex justify-between p-10 items-center h-20 text-white ">
      <div className="text-white text-2xl justify-self-end">
        The Ethnic Tribe
      </div>
      <ul className="flex p-4 space-x-6 text-xl ">
        <li>
          <a href="./">Hello</a>
        </li>
        <li>
          <a href="./">Hello</a>
        </li>
        <li>
          <a href="./">Hello</a>
        </li>
        <li>
          <a href="./">Hello</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
