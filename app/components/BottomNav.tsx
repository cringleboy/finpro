import React, { FunctionComponent, ReactElement } from "react";
import Image from "next/image";
import logoLight from "../assets/logo-light.png";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import { MdOutlineMail as Mail } from "react-icons/md";
import { LuClock9 as Clock } from "react-icons/lu";
import { FaLocationDot as Location } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";
import { CardProps } from "./ContactInfo";
import { IconContext } from "react-icons/lib";

interface NavColumnProps {
  header: string;
  content: ReactElement;
}

const NavColumn: FunctionComponent<NavColumnProps> = ({ header, content }) => {
  return (
    <div className="w-[25%]">
      <h4 className="font-bold text-xl mb-4 text-white">{header}</h4>
      <div className="bg-[#888c94] h-[1px] w-[66%] mb-7"></div>
      {content}
    </div>
  );
};

const ContactItem: FunctionComponent<CardProps> = ({
  Icon,
  text1,
  text1Hover,
}) => {
  return (
    <div className="flex flex-row gap-6">
      <IconContext.Provider
        value={{
          color: "#229dd1",
          size: Icon === Mail ? "1.5em" : "1.3em",
        }}
      >
        <Icon />
      </IconContext.Provider>
      {text1}
    </div>
  );
};

const BottomNav: FunctionComponent = (): ReactElement => {
  return (
    <div className="flex justify-between pt-20 h-[55vh] px-[12%] bg-fpGray text-[.94rem]">
      <div className="text-white font-light w-[23%] flex flex-col gap-5 mr-7">
        <Image src={logoLight} alt="logo" />
        <p className="mt-3">
          Welcome to the leading company delivering services that combine
          quality, reliability and compliance!
        </p>
        <div className="flex gap-8 items-center">
          <p className="italic text-[.89rem]">Follow Us:</p>
          <SocialIcons darkTheme={true} />
        </div>
      </div>
      <NavColumn
        header="Navigation"
        content={
          <nav className="text-[#888c94] font-light">
            <ul className="flex flex-row justify-between w-[72%]">
              <div className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-fpBlue">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fpBlue">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fpBlue">
                    Contacts
                  </a>
                </li>
              </div>
              <div className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-fpBlue">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fpBlue">
                    Our team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fpBlue">
                    Blocks
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        }
      />
      <NavColumn
        header="Contact Info"
        content={
          <div className="flex flex-col gap-4">
            <ContactItem
              Icon={Phone}
              text1={
                <p className="hover:text-fpBlue hover:cursor-pointer text-white font-bold">
                  (123) 456-7890
                </p>
              }
              text1Hover
            />
            <ContactItem
              Icon={Mail}
              text1={
                <p className="hover:text-fpBlue hover:cursor-pointer text-white font-light">
                  info@demolink.org
                </p>
              }
              text1Hover
            />
            <ContactItem
              Icon={Clock}
              text1={
                <p className="text-white font-light">Mon - Sat: 9:00 - 18:00</p>
              }
            />
            <ContactItem
              Icon={Location}
              text1={
                <div>
                  <p className="text-white font-bold hover:text-fpBlue hover:cursor-pointer">
                    267 Park Avenue
                  </p>
                  <p className="text-white font-light hover:text-fpBlue hover:cursor-pointer">
                    New York, NY 90210
                  </p>
                </div>
              }
              text1Hover
            />
          </div>
        }
      />
      <NavColumn
        header="Subscribe"
        content={
          <div className="w-full">
            <div className="flex flex-col max-w-[16rem]">
              <p className="text-white font-light">
                Get the latest updates and offers.
              </p>
            </div>
            <div className="pt-2 flex flex-row">
              <input
                placeholder="E-Mail"
                className="bg-[#f2fafd] rounded-l p-3  font-light"
              ></input>
              <button className="bg-[#44bef1] hover:bg-[#62c8f3] text-white rounded-r px-5 text-[1.06rem]">
                Send
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default BottomNav;
