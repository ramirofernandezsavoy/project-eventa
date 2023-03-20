import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-1 h-14 bg-primary flex text-white justify-between items-center font-rob font-semibold ">
      <h1>OOO</h1>
      <ul className="flex w-1/4 justify-evenly">
        <li>
          <button class="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </li>
        <li>
          <button class="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            Contact us
          </button>
        </li>
        <li>
          <button class="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            XXX
          </button>
        </li>
        <li>
          <button class="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            XXX
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar