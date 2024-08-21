import { SUBPAGE_CLASSES_INTRO } from "@/constants";

const Overview = () => {
  return (
    <section className="mx-auto p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <h3 className="text-3xl">{SUBPAGE_CLASSES_INTRO.heading}</h3>
          <p className="max-w-[600px] leading-loose text-gray-800 ">
            {SUBPAGE_CLASSES_INTRO.paragraph}
          </p>
        </div>
        <img src="/images/man1.jpg" alt="" />
      </div>
    </section>
  );
};

export default Overview;
