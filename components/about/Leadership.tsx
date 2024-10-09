import { SUBPAGE_ABOUT_LEADERSHIP } from "@/constants";
import Image from "next/image";

const Leadership = () => {
  return (
    <section className="mx-auto lg:mt-12">
      <h3 className="text-3xl mb-8 text-center">Our Leadership Team</h3>
      <div className="grid lg:grid-cols-2 gap-x-14 gap-y-8">
        {SUBPAGE_ABOUT_LEADERSHIP.map((item) => {
          return (
            <div key={item.key} className="flex flex-col">
              <div className="self-center w-[200px] h-[200px] md:w-[400px] md:h-[400px] relative border-2 border-black">
                <Image src={item.image} fill alt={item.alt} className="" />
              </div>
              <div className="flex gap-2 md:justify-between mt-4 md:mt-2 justify-center ">
                <h4 className="text-base">{item.name}</h4>
                <p className=" text-base">{item.title}</p>
              </div>
              <p className="max-w-[400px] mt-2 text-gray-800 max-sm:p-4">
                {item.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Leadership;
