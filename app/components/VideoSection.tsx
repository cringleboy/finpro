import React, { FunctionComponent, ReactElement, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import home from "../assets/home.png";
import { BsFillPlayFill as Play } from "react-icons/bs";
import { IconContext } from "react-icons";

const VideoSection: FunctionComponent = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="flex flex-row justify-center w-full mt-20">
      <div className="p-12 shadow-2xl flex flex-col gap-4 z-20 bg-white">
        <h3 className="text-[2.875rem] font-extrabold">How We Work</h3>
        <div className="h-1 w-20 bg-fpBlue"></div>
        <div className='bg-cover bg-[url("./assets/about.jpg")] w-[36vw] h-[50.65vh] mt-7 shadow-sm flex flex-col items-center justify-center'>
          <IconContext.Provider
            value={{
              color: "white",
              size: "3.8em",
            }}
          >
            <button
              aria-label="Plays video"
              onClick={() => setShowModal(true)}
              className="p-3 bg-fpBlue opacity-[.66] rounded-full"
            >
              <Play />
            </button>
          </IconContext.Provider>
        </div>
        {showModal &&
          createPortal(
            <div
              onClick={() => setShowModal(false)}
              className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-30"
            >
              <iframe
                className="bg-white"
                width="846"
                height="475"
                src="https://www.youtube.com/embed/_j7-oZ2eQwI"
                title="Productive Morning"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>,
            document.body
          )}
        <p className="font-bold text-[0.93rem] w-[33vw] my-3">
          Our investment advisors review clients' goals, investment experience
          and risk tolerance, and determine a financial investment plan best
          suited for each client.
        </p>
      </div>
      <Image src={home} alt="" className="-ml-4 h-[86.1vh] w-[34vw] z-10" />
      <div className="h-[77%] w-full bg-[#f2f2f5] self-center absolute"></div>
    </section>
  );
};

export default VideoSection;
