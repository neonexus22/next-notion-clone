import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="Jotion"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width={40}
        height={40}
        alt="Jotion"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;
