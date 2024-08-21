import { SUBPAGE_CLASSES_INTRO } from "@/constants";
import Image from "next/image";

const Overview = () => {
  return (
    <section className="mx-auto p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl">{SUBPAGE_CLASSES_INTRO.heading}</h3>
          <p className="max-w-[600px] leading-loose text-gray-800 ">
            {SUBPAGE_CLASSES_INTRO.paragraph}
          </p>
        </div>
        <div className=" relative border border-black w-[600px] h-[400px]">
          <Image
            src="/images/classes-intro.jpg"
            fill={true}
            alt="Smiling Girl"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
