"use client";

import React, { FunctionComponent, ReactElement } from "react";
import ContactInfo from "./components/ContactInfo";
import TopNav from "./components/TopNav";
import { EmblaCarousel } from "./components/Carousel";
import BottomNav from "./components/BottomNav";
import CardDisplay from "./components/CardDisplay";
import CounterBanner from "./components/CounterBanner";
import VideoSection from "./components/VideoSection";

const LandingPage: FunctionComponent = (): ReactElement => {
  return (
    <div className="bg-white">
      <ContactInfo />
      <TopNav />
      <main>
        <EmblaCarousel />
        <CardDisplay />
        <VideoSection />
        <CounterBanner />
        <BottomNav />
      </main>
      <footer className="w-full py-6 bg-[#282e3a] text-center text-white font-light">
        © 2023 FinPro. <a className="hover:cursor-pointer">Privacy policy</a>
      </footer>
    </div>
  );
};

export default LandingPage;
