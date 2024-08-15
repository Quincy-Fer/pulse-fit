'use client'

import { FEATURES } from "@/constants";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="w-full bg-black mx-auto">
      <div className="p-8 flex justify-center">
        <h2 className="text-white text-5xl tracking-tight max-w-[800px] text-center leading-tight">
          Our Edge
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        {FEATURES.map((item) => {
          return (
            <FeatureCard
              title={item.title}
              paragraph={item.paragraph}
              key={item.key}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
