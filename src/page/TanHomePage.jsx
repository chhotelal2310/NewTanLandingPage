import React from "react";
import { HeroSection } from "../component/HeroSection";
import { BPoS_and_Inflation } from "../component/BPoS_and_Inflation";
import { UseForTan } from "../component/UseForTan";

export const TanHomePage = () => {
  return (
    <>
      <HeroSection />
      <BPoS_and_Inflation />
      <UseForTan />
    </>
  );
};
