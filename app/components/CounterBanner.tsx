import React, { FunctionComponent, ReactElement, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

interface CounterProps {
  num: number;
  text: string;
}

const Counter: FunctionComponent<CounterProps> = ({ num, text }) => {
  const [countStarted, setCountStarted] = useState(false);
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
  });
  return (
    <p className="flex flex-col items-center">
      <CountUp
        end={num}
        enableScrollSpy
        scrollSpyOnce
        onStart={() => setCountStarted(true)}
        useEasing={false}
        duration={1}
      >
        {({ countUpRef }) => (
          <span
            className="text-6xl font-extrabold text-[#8acbe6]"
            ref={countUpRef}
          ></span>
        )}
      </CountUp>
      {countStarted && <p className="font-light text-sm text-white">{text}</p>}
    </p>
  );
};

const CounterBanner: FunctionComponent = (): ReactElement => {
  return (
    <section className="w-full h-[26vh] bg-[#229dd1]">
      <div className="h-full m-auto w-[67%] flex flex-row justify-between items-center">
        <Counter num={275} text="Cases completed" />
        <Counter num={19} text="Consultants" />
        <Counter num={130} text="Awards won" />
        <Counter num={723} text="Happy clients" />
      </div>
    </section>
  );
};

export default CounterBanner;
