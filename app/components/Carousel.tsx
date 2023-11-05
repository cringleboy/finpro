"use client";

import React, { FunctionComponent, ReactElement, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IconContext } from "react-icons";
import { IoIosArrowBack as ArrowBack } from "react-icons/io";
import { IoIosArrowForward as ArrowForward } from "react-icons/io";

export const EmblaCarousel: FunctionComponent = (): ReactElement => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [
      Autoplay({
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section>
      <div className="embla overflow-hidden">
        <div className="embla__viewport relative" ref={emblaRef}>
          {emblaApi && (
            <div className="flex flex-row justify-between items-center absolute top-0 right-0 left-0 bottom-0 z-10">
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "2.5em",
                }}
              >
                <button
                  onClick={scrollPrev}
                  aria-label="Scroll previous"
                  className="px-1 bg-[#6666669e] h-min"
                >
                  <ArrowBack />
                </button>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "2.5em",
                }}
              >
                <button
                  onClick={scrollNext}
                  aria-label="Scroll forward"
                  className="px-1 bg-[#6666669e] h-min"
                >
                  <ArrowForward />
                </button>
              </IconContext.Provider>
            </div>
          )}
          <div className="embla__container flex flex-row">
            <div className="embla__slide">
              <div className='bg-cover bg-[url("./assets/slide-1.jpg")] w-[100vw] h-[69vh] py-36 pl-[16%]'>
                <div className="w-[28rem]">
                  <h1 className="text-5xl font-bold leading-snug mb-6">
                    Solutions that never miss the aim
                  </h1>
                  <div className="flex flex-row gap-5">
                    <button className="rounded bg-fpBlue p-2 w-36 text-white font-semibold">
                      Learn More
                    </button>
                    <button className="rounded p-2 w-36 border-2 border-[#aeaeae] font-semibold">
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className='bg-cover bg-[url("./assets/slide-2.jpg")] w-[100vw] h-[69vh] py-36 pl-[24%]'>
                <div>
                  <h1 className="text-5xl font-bold text-white">
                    Expert Financial Advice
                  </h1>
                  <p className="text-white text-xl my-6 w-1/3">
                    With over 20 years of experience we'll ensure you always get
                    the best guidance
                  </p>
                  <div className="flex flex-row gap-5">
                    <button className="rounded bg-fpBlue p-2 w-36 text-white font-semibold">
                      Our Services
                    </button>
                    <button className="rounded p-2 w-36 border-2 border-white text-white bg-clear font-semibold">
                      Purchase now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
