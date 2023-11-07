import React, { FunctionComponent, ReactElement, useState } from "react";
import { HiOutlineMagnifyingGlass as Search } from "react-icons/hi2";
import { IconContext } from "react-icons/lib";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";

const linkStyle = "font-light m-5 hover:text-[#44bef1] hover:cursor-pointer";

const blocksLinkStyle =
  "font-light mx-7 hover:text-[#44bef1] hover:cursor-pointer";

interface MenuCardProps {
  title: string;
  content: ReactElement;
}

const MenuCard: FunctionComponent<MenuCardProps> = ({ title, content }) => {
  return (
    <li className="hover:text-[#44bef1]">
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger className="flex items-center pb-3 hover:cursor-pointer">
          {title}
          <ChevronDown
            className="relative text-[#44bef1] top-[1px] ml-1 h-4 w-4"
            aria-hidden="true"
          />
        </HoverCardTrigger>
        <HoverCardContent
          className={`${
            title === "Blocks" ? "w-[75vw] mr-16 py-8" : "py-3 ml-32"
          } rounded-none -mt-[3.2px]`}
        >
          {content}
        </HoverCardContent>
      </HoverCard>
    </li>
  );
};

const TopNav: FunctionComponent = (): ReactElement => {
  const [searchVisible, setSearchVisible] = useState(false);
  return (
    <header className="bg-fpGray pt-3 sticky top-0 z-30">
      <div className="flex flex-row justify-between items-center w-[77%] m-auto">
        <nav className="text-white font-bold relative">
          <ul className="flex flex-row gap-8">
            <li>
              <a href="#" className="text-[#44bef1] pb-3">
                Home
              </a>
            </li>
            <MenuCard
              title="About Us"
              content={
                <>
                  <a className={linkStyle}>Our Team</a>
                  <div className="h-[1px] bg-gray-300 my-2"></div>
                  <a className={linkStyle}>Team Member Profile</a>
                </>
              }
            />
            <MenuCard
              title="Services"
              content={<a className={linkStyle}>Single service</a>}
            />
            <MenuCard
              title="Blog"
              content={<a className={linkStyle}>Blog post</a>}
            />
            <MenuCard
              title="Pages"
              content={
                <>
                  <a className={linkStyle}>Privacy policy</a>
                  <div className="h-[1px] bg-gray-300 my-2"></div>
                  <a className={linkStyle}>Search results</a>
                </>
              }
            />
            <li>
              <a href="#" className="hover:text-[#44bef1] pb-3">
                Contacts
              </a>
            </li>
            <MenuCard
              title="Blocks"
              content={
                <div className="flex justify-between pr-60">
                  <div className="flex flex-col gap-3 mb-2">
                    <p className="font-normal mx-5 text-[#666]">ELEMENTS 1</p>
                    <a className={blocksLinkStyle}>Headers</a>
                    <a className={blocksLinkStyle}>Footers</a>
                    <a className={blocksLinkStyle}>Brands</a>
                    <a className={blocksLinkStyle}>Call to action</a>
                    <a className={blocksLinkStyle}>Counters</a>
                  </div>
                  <div className="flex flex-col gap-3 mb-2">
                    <p className="font-normal mx-5 text-[#666]">ELEMENTS 2</p>
                    <a className={blocksLinkStyle}>Gallery</a>
                    <a className={blocksLinkStyle}>Gallery album</a>
                    <a className={blocksLinkStyle}>Maps</a>
                    <a className={blocksLinkStyle}>Services page</a>
                    <a className={blocksLinkStyle}>Sliders</a>
                  </div>
                  <div className="flex flex-col gap-3 mb-2">
                    <p className="font-normal mx-5 text-[#666]">ELEMENTS 3</p>
                    <a className={blocksLinkStyle}>Forms</a>
                    <a className={blocksLinkStyle}>Subscribe forms</a>
                    <a className={blocksLinkStyle}>Small features</a>
                    <a className={blocksLinkStyle}>Team page</a>
                    <a className={blocksLinkStyle}>Testimonials</a>
                  </div>
                </div>
              }
            />
          </ul>
        </nav>
        <input
          type="search"
          placeholder="Search..."
          hidden={!searchVisible}
          className="bg-[#3c434f] rounded px-4 py-2 mb-3 text-sm text-[#9d9fa2] absolute right-40 w-[22%] outline-none"
        ></input>
        <IconContext.Provider
          value={{
            color: "white",
            size: "1.8em",
          }}
        >
          <button className="mb-3 z-10" onClick={() => setSearchVisible(true)}>
            <Search />
          </button>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default TopNav;
