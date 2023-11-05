import React, { FunctionComponent, ReactElement } from "react";
import { CardProps } from "./ContactInfo";
import { GoCheckCircle as Check } from "react-icons/go";
import {
  SlHourglass as Hourglass,
  SlBriefcase as BriefCase,
} from "react-icons/sl";
import { RiBarChartFill as Chart } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import Image from "next/image";
import corner from "../assets/corner.png";

const Card: FunctionComponent<CardProps> = ({ Icon, text1, text2 }) => {
  return (
    <div className="w-48 flex flex-col gap-6 items-center justify-center">
      <div className="w-20">
        <div className="flex flex-row justify-between">
          <Image src={corner} alt="" />
          <Image src={corner} alt="" style={{ transform: "rotate(90deg)" }} />
        </div>
        <IconContext.Provider
          value={{
            color: "#229dd1",
            size: "3em",
            className: "m-auto",
          }}
        >
          <Icon />
        </IconContext.Provider>
        <div className="flex flex-row justify-between">
          <Image src={corner} alt="" style={{ transform: "rotate(-90deg)" }} />
          <Image src={corner} alt="" style={{ transform: "rotate(180deg)" }} />
        </div>
      </div>
      <div className="w-full text-center">
        <h2 className="font-extrabold text-xl mb-5">{text1}</h2>
        <p className="text-[#666] text-[0.9rem] font-light">{text2}</p>
      </div>
    </div>
  );
};

const CardDisplay: FunctionComponent = (): ReactElement => {
  return (
    <div className="w-full h-[55vh]">
      <div className="h-full m-auto pt-20 w-[72%] flex flex-row justify-between items-start">
        <Card
          Icon={Check}
          text1="Financial Planning"
          text2="We'll help you make sensible decisions about money that can help you achieve your goals in life."
        />
        <Card
          Icon={Hourglass}
          text1="Retirement Planning"
          text2="Use our strategies and retirement advice, including retirement calculators to help you retire faster."
        />
        <Card
          Icon={Chart}
          text1="Risk Management"
          text2="Risk management is intended to manage financial and other losses associated with risks to your assets or business."
        />
        <Card
          Icon={BriefCase}
          text1="Taxation"
          text2="Tax planning considers the tax implications of business decisions, usually with the goal of minimizing tax liability."
        />
      </div>
    </div>
  );
};

export default CardDisplay;
