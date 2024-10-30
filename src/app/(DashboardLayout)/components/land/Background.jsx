import { heroBackground } from "../assets";
import { BackgroundCircles } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";

import Image from 'next/image'

const Background = () => {
  return (
    <div className="">
      <div className="relative -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] overflow-hidden h-screen">
        <Image
          src={heroBackground}
          className="w-full overflow-hidden"
          alt="heroBackground"
          width={1080}
          height={1800}
        />
      </div>
      <ScrollParallax isAbsolutelyPositioned>
        <BackgroundCircles />
      </ScrollParallax>
    </div>
  );
};

export default Background;
