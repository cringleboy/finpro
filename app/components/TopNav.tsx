import React, { FunctionComponent, ReactElement } from "react";
import { HiOutlineMagnifyingGlass as Search } from "react-icons/hi2";
import { IconContext } from "react-icons/lib";

const TopNav: FunctionComponent = (): ReactElement => {
  return (
    <div className="bg-fpGray py-4">
      <div className="flex flex-row justify-between items-center w-[77%] m-auto">
        <nav className="text-white font-bold">
          <ul className="flex flex-row gap-8 [&>*:hover]:text-soGreen">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Blocks</a>
            </li>
          </ul>
        </nav>
        <IconContext.Provider
          value={{
            color: "white",
            size: "1.8em",
          }}
        >
          <button>
            <Search />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default TopNav;
