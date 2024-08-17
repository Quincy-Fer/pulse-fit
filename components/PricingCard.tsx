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
          <sup className="text-2xl text-white">$</sup>
          <strong className="text-4xl text-white">{price}</strong>
          <em className="self-end text-2xl">/month</em>
        </p>
      </div>
      <div className="flex">
        {benefits.map((item) => {
          return (
            <div className="">
              <FaCheck className="text-2xl" />
              <p className="text-balance">{item.benefitname}</p>
            </div>
          );
        })}
      </div>
      <p className="text-white tracking-[2px] mt-8 ">{paragraph}</p>

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
