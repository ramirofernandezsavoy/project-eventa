import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-1 h-16 bg-primary flex text-white justify-between items-center font-rob font-semibold ">
      <img
        src="../../../public/eventa-logo2.png"
        alt="eLogo"
        className="w-24 p-2"
      />
      <ul className="flex w-1/4 justify-center items-center">
        <li>
          <button className="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </li>
        <li>
          <button className="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            Contact us
          </button>
        </li>
        <li>
          <button className="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
        </li>
        <li>
          <button className="hover:bg-primary-hover text-white font-bold py-2 px-4 rounded">
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
