import { SUBPAGE_ABOUT } from "@/constants";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="mx-auto pb-8 lg:pb-16  ">
      <div className="lg:flex gap-20 ">
        <div className="hidden lg:block lg:border border-black">
          <Image
            src="/images/mission.jpg"
            width={500}
            height={1000}
            alt="Image of gym"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl mb-4">Our Mission, Your Success</h3>

          <p className="max-w-[600px] leading-loose text-gray-800 ">
            {SUBPAGE_ABOUT.mission}
          </p>
        </div>
        <div className="lg:hidden lg:border mt-4 border-black">
          <Image
            src="/images/mission.jpg"
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

export default Mission;
