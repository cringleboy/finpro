import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import { LuAlarmClock as Clock } from "react-icons/lu";
import { GrGooglePlus as Google } from "react-icons/gr";
import { IoLocationOutline as Location } from "react-icons/io5";
import { AiOutlinePhone as Phone } from "react-icons/ai";
import {
  BiLogoFacebook as Facebook,
  BiLogoTwitter as Twitter,
} from "react-icons/bi";
import { IconContext, IconType } from "react-icons/lib";
import Image from "next/image";
import logo from "../assets/logo.png";

interface ContactItemProps {
  Icon: IconType;
  text1: string;
  text2: string;
}

const ContactItem: FunctionComponent<ContactItemProps> = ({
  Icon,
  text1,
  text2,
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
        <p className="font-semibold">{text1}</p>
        <p className="text-gray-500 font-light">{text2}</p>
      </div>
    </div>
  );
};

const ContactInfo: FunctionComponent = (): ReactElement => {
  return (
    <div>
      <div className="py-3 bg-[#f2f2f5]">
        <div className="flex flex-row justify-between items-center w-[77%] m-auto">
          <p className="text-[#666] text-sm">Welcome to FinPro, your expert in managing your finances!</p>
          <div className="flex flex-row gap-3">
            <IconContext.Provider
              value={{
                color: "#474747",
                size: "1.1em",
              }}
            >
              <button className="rounded-full p-1 w-7 h-7 bg-[#dfdfdf] flex justify-center">
                <Facebook />
              </button>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "#474747",
                size: "1.1em",
              }}
            >
              <button className="rounded-full p-1 w-7 h-7 bg-[#dfdfdf] flex justify-center">
                <Twitter />
              </button>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "#474747",
                size: "1.1em",
              }}
            >
              <button className="rounded-full p-1 w-7 h-7 bg-[#dfdfdf] flex justify-center">
                <Google />
              </button>
            </IconContext.Provider>
          </div>
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
            />
            <ContactItem
              Icon={Phone}
              text1="(123) 456-7890"
              text2="info@demolink.org"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
