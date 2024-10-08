"use client";

import { IconType } from "react-icons";

const FeatureCard = ({
  title,
  paragraph,
  icon: Icon,
}: {
  title: string;
  paragraph: string;
  icon: IconType;
}) => {
  return (
    <div className="flex flex-col items-center border-4 border-accent p-4  ">
      <Icon className="text-accent text-[72px] self-center mb-4  " />
      <h4 className="text-white text-xl  text-center mb-4">{title}</h4>
      <p className="text-white max-w-[600px] text-base leading-loose ">{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
