import ButtonJoin from "./ButtonJoin";
import { HERO } from "@/constants/index";

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[760px] bg-hero bg-cover bg-top bg-no-repeat
     relative "
    >
      <div className="w-full h-full bg-black/40 absolute top-0 z-10">
        <div className="absolute top-16 p-16">
          <h1 className="text-white text-7xl tracking-tight leading-tight max-w-[800px] text-balance">
            Where every <span className="text-accent">Pulse</span> powers your 
            <span className="text-red-700"> Potential</span>
          </h1>
          <p className="text-white text-lg max-w-[600px] mt-5">{HERO.paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
