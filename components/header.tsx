import HeroVideo from "./heroVideo";
import Marquee from "./marquee";
import { SpinnyThing } from "./spinnyThing/spinnyThing";

export const Header = () => {
  return (
    <header>
      <HeroVideo/>
    
      <div className=" min-h-screen flex flex-col items-center justify-center">
        <h1 className="z-50  mx-16 text-8xl text-center font-extrabold ">
          TRYING TO BUILD <br /> EXPERIENCES THAT STAY <br /> WITH YOU
        </h1>
        <div className="h-1 z-50 mt-24 w-1/3 bg-white"></div>
        <h2 className="z-50 mt-8 text-4xl">
          AKANKSHA GAJANKAR
        </h2>
        <strong className="z-50 text-3xl mt-8">UIUX DESIGNER</strong>
      </div>
    </header>
  );
};
