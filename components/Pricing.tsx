import { PRICING } from "@/constants";
import ButtonJoin from "./ButtonJoin";

const Pricing = () => {
  return (
    <section className="w-full mx-auto bg-black">
      <div className="p-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-center text-5xl">
            Memberships Tailored for You
          </h2>
          <p className="text-white tracking-[4px] text-center mt-4">
            Find the membership plan that matches your goals and lifestyle.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-16">
        {PRICING.map((item) => {
          return (
            <div
              id={item.key}
              className="bg-accent p-8   transition-all flex flex-col"
            >
              <h4 className="text-white text-2xl">{item.title}</h4>
              <div className="bg-red-900 p-3 mt-4 mb-4">
                <p className="text-white flex gap-2 items-center">
                  <sup className="text-2xl text-white">$</sup>
                  <strong className="text-4xl text-white">{item.price}</strong>
                  <em className="self-end text-2xl">/month</em>
                </p>
              </div>
              <p className="text-white tracking-[2px] mt-8 ">
                {item.paragraph}
              </p>
              <div className="text-center">
                <ButtonJoin
                  text="Find Out More"
                  href="/membership"
                  containerStyles="text-white font-bold text-lg uppercase mt-6 border-2 px-4 py-2
                  hover:bg-white hover:text-accent transition-all"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
