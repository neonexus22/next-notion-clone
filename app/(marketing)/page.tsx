import React from "react";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Footer from "./_components/footer";

type Props = {};

const MarketingPage = (props: Props) => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-1 flex-col items-center justify-center md:justify-start text-center gap-y-8 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
