import { SUBPAGE_CLASSES_DESCRIPTIONS } from "@/constants";

const Descriptions = () => {
  return (
    <section className="px-16 pt-16">
      <h3 className="text-3xl mb-2">What We Offer</h3>
      <p className="uppercase tracking-[1px] mb-2">take a closer look at our wide variety of classes</p>
      <div>
        {SUBPAGE_CLASSES_DESCRIPTIONS.map((item) => {
          return <img src={item.image} alt={item.alt} />;
        })}
      </div>
      <div className="border-b-2 border-dashed border-accent mt-16"></div>
    </section>
  );
};

export default Descriptions;
