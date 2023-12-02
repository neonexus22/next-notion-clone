import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex items-center p-6 bg-background">
      <Logo />
      <div className="w-full flex justify-between items-center gap-x-2 md:ml-auto md:justify-end text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
