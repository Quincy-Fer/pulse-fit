"use client";

import { CLASSES } from "@/constants";
import ClassCard from "./ClassCard";

const Classes = () => {
  return (
    <section className="w-full  mx-auto bg-slate-50">
      <div className="p-8 md:p-16 ">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-accent tracking-tight max-w-[800px]  leading-tight font-bold mb-4">
          Find Your Perfect Workout
        </h2>
        <p className="max-w-[600px] text-gray-800 md:tracking-[3px] mb-8 ">
          Explore a variety of classes designed to challenge and inspire you
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CLASSES.map((item, index) => {
            return (
              <ClassCard
                key={index}
                title={item.title}
                paragraph={item.paragraph}
                icon={item.icon}
                image={item.image}
                alt={item.alt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Classes;
