import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row p-2 justify-between items-center px-3 md:mx-5">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-md mr-2"
          src="https://s2.coinmarketcap.com/static/img/coins/200x200/19100.png"
        />
        <h1 className="text-2xl font-bold bg-gradient-to-t from-blue to-purple text-transparent bg-clip-text">
          NeoFI
        </h1>
      </div>
      <ul
        className={`md:flex md:flex-row  md:w-1/4 md:justify-evenly flex-col  absolute md:static left-40  w-full  ease-in ${
          open ? "top-20 " : "top-[-490px]"
        }  `}
      >
        <li className=" group text-blue transition duration-300">
          Trade
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 relative top-2.5 h-1 bg-blue"></span>
        </li>
        <li className="group text-blue transition duration-300">
          Earn
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 relative top-2.5 h-1 bg-blue"></span>
        </li>
        <li className="group text-blue transition duration-300">
          Support
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 relative top-2.5 h-1 bg-blue"></span>
        </li>
        <li className="group text-blue transition duration-300">
          About
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 relative top-2.5 h-1 bg-blue"></span>
        </li>
      </ul>
      <button className="bg-gradient-to-t from-blue to-purple rounded-xl px-2 m-1 ">
        Connect wallet
      </button>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <GiHamburgerMenu className="text-purple" />
      </div>
    </div>
  );
};

export default Navbar;
