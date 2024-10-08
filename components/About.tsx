import Image from "next/image";
import ButtonJoin from "./ButtonJoin";
import { ABOUT } from "@/constants";

const About = () => {
  return (
    <section className="mx-auto bg-slate-50 relative pb-20 ">
      <img
        src="/images/pulsesvg.svg"
        alt="image of a pulse"
        className="absolute w-full opacity-50 h-full object-cover"
      />
      {/* header and padding */}
      <div className="p-8 w-full flex justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl tracking-tight max-w-[800px] text-center leading-tight font-bold lg:mb-14 z-10">
          {ABOUT.header}
        </h2>
      </div>
      {/* text and button */}
      <div className="flex lg:justify-evenly justify-center">
        <div className="z-10 flex flex-col">
          <p className="tracking-[3px] font-bold md:mb-4 md:text-lg max-sm:text-center">
            {ABOUT.subheading}
          </p>
          <p className="max-w-[600px]  max-sm:p-4  md:text-lg md:mt-8 leading-relaxed ">
            {ABOUT.paragraph}
          </p>
          <ButtonJoin
            href="/about"
            text="Learn More"
            containerStyles="uppercase max-sm:ml-20  mt-6 md:mt-10 lg:mt-16 font-bold bg-accent px-8 py-4 text-white hover:bg-black hover:text-white
           transition-all text-lg "
          />
        </div>
        {/* image */}
        <div className="hidden lg:block z-20 border-2 border-black">
          <Image
            src="/images/features.jpg"
            alt="Guy working out"
            width={600}
            height={700}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
