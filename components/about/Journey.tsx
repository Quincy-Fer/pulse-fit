import { SUBPAGE_ABOUT } from "@/constants";
import Image from "next/image";

const Journey = () => {
  return (
    <section className="mx-auto  p-16">
      <div className="flex gap-20">
        <div className="flex flex-col">
          <h3 className="text-3xl mb-4">Our Journey So Far</h3>

          <p className="max-w-[600px] leading-loose text-gray-800 ">
            {SUBPAGE_ABOUT.journey}
          </p>
        </div>
        <div className="border border-black">
          <Image
            src="/images/journey.jpg"
            width={500}
            height={1000}
            alt="Image of gym"
          />
        </div>
      </div>
      <div className="border-b-2 border-dashed border-accent mt-16"></div>
    </section>
  );
};

export default Journey;
