import { PRICING } from "@/constants";
import PricingCard from "./PricingCard";

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
          return <PricingCard {...item} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;
