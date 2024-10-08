"use client";

import { FEATURES } from "@/constants";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="w-full bg-black mx-auto">
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl tracking-tight text-center leading-tight">
          Your Progress, Our Priority
        </h2>
        <p className="text-white tracking-[4px] text-center mt-4">Everything You Need to Reach New Heights</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-12 pb-14  ">
        {FEATURES.map((item,index) => {
          return (
            <FeatureCard
              title={item.title}
              paragraph={item.paragraph}
              key={index}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
