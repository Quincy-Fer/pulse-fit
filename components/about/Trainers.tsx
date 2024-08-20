import { SUBPAGE_ABOUT_TRAINERS } from "@/constants";
import TrainersCard from "./TrainersCard";

const Trainers = () => {
  return (
    <section className="mx-auto pb-16">
      <div className="border-t-2 border-dashed border-accent mt-16"></div>
      <h3 className="text-3xl mt-8">Our Trainers</h3>
      <p className="tracking-[1px] uppercase text-base mt-2 text-gray-800">Hover To Find Out More</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {SUBPAGE_ABOUT_TRAINERS.map((item) => {
          return <TrainersCard {...item} />;
        })}
      </div>
    </section>
  );
};

export default Trainers;
