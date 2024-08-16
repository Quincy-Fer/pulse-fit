"use client";

import { CLASSES } from "@/constants";
import ClassCard from "./ClassCard";

const Classes = () => {
  return (
    <section className="w-full  mx-auto bg-slate-50">
      <div className="p-16 ">
        <h2 className="text-5xl text-accent tracking-tight max-w-[800px]  leading-tight font-bold mb-4">
          Find Your Perfect Workout
        </h2>
        <p className="max-w-[600px] text-gray-800 tracking-[3px] ">
          Explore a sample of classes designed to challenge and inspire you
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {CLASSES.map((item) => {
            return (
              <ClassCard
                key={item.key}
                title={item.title}
                paragraph={item.paragraph}
                icon={item.icon}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Classes;
