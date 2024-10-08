import { SUBPAGE_ABOUT_TRAINERS } from "@/constants";
import TrainersCard from "./TrainersCard";

const Trainers = () => {
  return (
    <section className="mx-auto md:p-8 lg:p-12 ">
      <div className="border-t-2 border-dashed border-accent md:mt-16"></div>
      <h3 className="text-3xl mt-8 text-center">Our Trainers</h3>
      <p className="tracking-[1px] uppercase text-base mt-2 text-gray-700 text-center">
        Hover To Find Out More
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2 lg:gap-4 mt-4">
        {SUBPAGE_ABOUT_TRAINERS.map((item, index) => {
          return <TrainersCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Trainers;
