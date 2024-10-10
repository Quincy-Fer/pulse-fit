import { SUBPAGE_CLASSES_INTRO } from "@/constants";
import Image from "next/image";

const Overview = () => {
  return (
    <section className="hidden md:block mx-auto px-16 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl">{SUBPAGE_CLASSES_INTRO.heading}</h3>
          <p className="max-w-[600px] leading-loose text-gray-800 ">
            {SUBPAGE_CLASSES_INTRO.paragraph}
          </p>
        </div>
        <div className="hidden md:block relative border border-black w-[580px] h-[400px]">
          <Image
            src="/images/classes-intro.jpg"
            fill={true}
            alt="Smiling Girl"
            className=""
          />
        </div>
      </div>
       <div className="border-b-2 border-dashed border-accent mt-16"></div>
    </section>
  );
};

export default Overview;
