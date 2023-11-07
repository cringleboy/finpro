import React, { FunctionComponent, ReactElement } from "react";
import SocialIcons from "./SocialIcons";
import { LuAlarmClock as Clock } from "react-icons/lu";
import { IoLocationOutline as Location } from "react-icons/io5";
import { AiOutlinePhone as Phone } from "react-icons/ai";
import { IconContext, IconType } from "react-icons/lib";
import Image from "next/image";
import logo from "../assets/logo.png";

export interface CardProps {
  Icon: IconType;
  text1: string | ReactElement;
  text2?: string;
  text1Hover?: boolean;
  text2Hover?: boolean;
}

const ContactItem: FunctionComponent<CardProps> = ({
  Icon,
  text1,
  text2,
  text1Hover,
  text2Hover,
}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <IconContext.Provider
        value={{
          color: "#229dd1",
          size: "2.4em",
        }}
      >
        <Icon />
      </IconContext.Provider>
      <div>
        <p
          className={`${
            text1Hover && "hover:text-fpBlue hover:cursor-pointer"
          } font-semibold`}
        >
          {text1}
        </p>
        <p
          className={`${
            text2Hover && "hover:text-fpBlue hover:cursor-pointer"
          } text-gray-500 font-light`}
        >
          {text2}
        </p>
      </div>
    </div>
  );
};

const ContactInfo: FunctionComponent = (): ReactElement => {
  return (
    <div>
      <div className="py-3 bg-[#f2f2f5]">
        <div className="flex flex-row justify-between items-center w-[77%] m-auto">
          <p className="text-[#666] text-sm">
            Welcome to FinPro, your expert in managing your finances!
          </p>
          <SocialIcons />
        </div>
      </div>
      <div className="py-6">
        <div className="flex flex-row justify-between items-center w-[77%] m-auto">
          <Image src={logo} alt="logo" />
          <div className="flex flex-row gap-16">
            <ContactItem
              Icon={Clock}
              text1="Mon - Sat: 9:00 - 18:00"
              text2="Sunday CLOSED"
            />
            <ContactItem
              Icon={Location}
              text1="267 Park Avenue"
              text2="New York, NY 90210"
              text2Hover
            />
            <ContactItem
              Icon={Phone}
              text1="(123) 456-7890"
              text2="info@demolink.org"
              text1Hover
              text2Hover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
