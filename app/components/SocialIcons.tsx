import React, { FunctionComponent, ReactElement } from "react";
import { GrGooglePlus as Google } from "react-icons/gr";
import {
  BiLogoFacebook as Facebook,
  BiLogoTwitter as Twitter,
} from "react-icons/bi";
import { IconContext, IconType } from "react-icons/lib";

interface DarkThemeProps {
  darkTheme?: boolean;
}

interface SocialIconProps extends DarkThemeProps {
  Icon: IconType;
}

const SocialIcon: FunctionComponent<SocialIconProps> = ({
  Icon,
  darkTheme,
}) => {
  return (
    <IconContext.Provider
      value={{
        color: "#474747",
        size: "1.1em",
      }}
    >
      <a
        className={`${
          darkTheme ? "bg-white" : "bg-[#dfdfdf]"
        } rounded-full p-1 w-7 h-7 flex justify-center hover:cursor-pointer`}
      >
        <Icon />
      </a>
    </IconContext.Provider>
  );
};

const SocialIcons: FunctionComponent<DarkThemeProps> = ({ darkTheme }) => {
  return (
    <div className="flex flex-row gap-3">
      <SocialIcon Icon={Facebook} darkTheme={darkTheme} />
      <SocialIcon Icon={Twitter} darkTheme={darkTheme} />
      <SocialIcon Icon={Google} darkTheme={darkTheme} />
    </div>
  );
};

export default SocialIcons;
