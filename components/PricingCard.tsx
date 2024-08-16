const PricingCard = ({
  title,
  price,
  paragraph,
}: {
  title: string;
  price: number;
  paragraph: string;
}) => {
  return (
    <div className="bg-accent hover:scale-105 duration-300 p-8 transition-all flex flex-col">
      <h4 className="text-white text-2xl ">{title}</h4>
      <div className="bg-red-900 p-3 mt-4 mb-4">
        <p className="text-white flex gap-2 items-center">
          <sup className="text-2xl text-white">$</sup>
          <strong className="text-4xl text-white">{price}</strong>
          <em className="self-end text-2xl">/month</em>
        </p>
      </div>
      <p className="text-white tracking-[2px] mt-8 ">{paragraph}</p>
    </div>
  );
};

export default PricingCard;
