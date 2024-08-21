import Calendar from "@/components/classes/Calendar";
import Descriptions from "@/components/classes/Descriptions";
import Overview from "@/components/classes/Overview";

const page = () => {
  return (
    <section className="bg-slate-100 mx-auto ">
      <div className="pt-36 pb-20 bg-accent">
        <h2 className="text-white text-center text-5xl">Classes</h2>
      </div>
      <div className="flex flex-col mx-auto justify-center max-w-[1440px]">
        <Overview />
        <Descriptions />
        <Calendar />
      </div>
    </section>
  );
};

export default page;
