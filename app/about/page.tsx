import Journey from "@/components/about/Journey";
import Leadership from "@/components/about/Leadership";
import Mission from "@/components/about/Mission";
import Trainers from "@/components/about/Trainers";
import Values from "@/components/about/Values";

const page = () => {
  return (
    <section className="bg-slate-100 mx-auto ">
      <div className="pt-36 pb-20 bg-accent">
        <h2 className="text-white text-center text-4xl md:text-5xl">About Us</h2>
      </div>
      <div className="flex flex-col mx-auto justify-center max-w-[1440px]">
        <Journey />
        <Mission />
        <Values />
        <Leadership />
        <Trainers />
      </div>
    </section>
  );
};

export default page;
