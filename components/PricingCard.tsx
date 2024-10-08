import { FaCheck } from "react-icons/fa6";
import ButtonJoin from "./ButtonJoin";
type Benefit = {
  benefitname: string;
};

const PricingCard = ({
  title,
  price,
  paragraph,
  benefits,
}: {
  title: string;
  price: number;
  paragraph: string;
  benefits: Benefit[];
}) => {
  return (
    <div className="bg-accent hover:scale-105 duration-300 p-8 transition-all flex flex-col">
      <h4 className="text-white text-2xl ">{title}</h4>
      <div className="bg-red-900 p-3 mt-4 mb-4">
        <p className="text-white flex gap-2 items-center">
          <sup className="text-xl md:text-2xl text-white">$</sup>
          <strong className="text-2xl md:text-4xl text-white">{price}</strong>
          <em className="self-end md:text-2xl">/month</em>
        </p>
      </div>
      <div className="flex">
        {benefits.map((item, index) => {
          return (
            <div className="max-sm:grid max-sm:grid-cols-1 p-2 md:p-4" key={index}>
              <p className="text-white md:text-lg leading-normal ">
                {item.benefitname}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-white/80 md:tracking-[2px] mt-8 ">{paragraph}</p>

      <div className="text-center">
        <ButtonJoin
          text="Join Now"
          href="/membership"
          containerStyles="text-white px-4 py-2 border-2 uppercase mt-4 font-bold 
          hover:text-white hover:bg-black transition-all hover:border-none"
        />
      </div>
    </div>
  );
};

export default PricingCard;
