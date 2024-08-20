import { SUBPAGE_ABOUT_LEADERSHIP } from "@/constants";
import Image from "next/image";

const Leadership = () => {
  return (
    <section className="mx-auto p-16">
      <h3 className="text-3xl mb-8 text-center">Our Leadership Team</h3>
      <div className="grid grid-cols-2 gap-x-28 gap-y-16">
        {SUBPAGE_ABOUT_LEADERSHIP.map((item) => {
          return (
            <div key={item.key}>
              <div className="w-[400px] h-[400px] relative border-2 border-black">
                <Image src={item.image} fill alt={item.alt} className="" />
              </div>
              <div className="flex gap-2 justify-between mt-2 ">
                <h4 className="text-base">{item.name}</h4>
                <p className=" text-base">{item.title}</p>
              </div>
              <p className="max-w-[400px] mt-2 text-gray-800">
                {item.paragraph}
              </p>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-dashed border-accent mt-16"></div>
    </section>
  );
};

export default Leadership;
