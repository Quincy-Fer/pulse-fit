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
          <h1 className="text-white md:text-6xl lg:text-7xl tracking-tight leading-tight md:max-w-[500px] lg:max-w-[800px] text-balance font-bold">
            Where every <span className="text-accent">Pulse</span> powers your
            <span className="text-red-700"> Potential</span>
          </h1>
          <p className="text-white text-lg max-w-[600px] md:mt-14 lg:mt-5 leading-relaxed">
            {HERO.paragraph}
          </p>
          <div className="flex gap-20 mt-16">
            <ButtonJoin
              text="Contact Us"
              href="/contact"
              containerStyles="text-white border border-white px-10 py-4 
             font-bold text-xl transition-all hover:bg-white hover:text-black hover:duration-300 hover:underline"
            />
            <ButtonJoin
              text="Register Now"
              containerStyles="text-white bg-accent px-10 py-4 font-bold text-xl transition-all
               hover:bg-black hover:text-white duration-300 uppercase "
              href="/membership"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
