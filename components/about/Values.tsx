import { SUBPAGE_ABOUT_VALUES } from "@/constants";

const Values = () => {
  return (
    <section className="mx-auto max-w-[1176px] ">
      <h3 className="text-3xl  text-center">What We Stand For</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] pt-16 gap-10">
        {SUBPAGE_ABOUT_VALUES.map((item,index) => {
          return (
            <div key={index}>
              <div className="flex justify-center gap-10 ">
                <item.icon className="text-3xl text-accent" />
                <h4 className="text-xl">{item.title}</h4>
              </div>

              <p className="text-gray-700 mt-4">{item.paragraph}</p>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-dashed border-accent mt-16"></div>
    </section>
  );
};

export default Values;
