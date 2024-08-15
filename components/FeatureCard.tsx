'use client'

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
    <div className="flex flex-col justify-center">
      <Icon className="text-white text-[72px]"  /> 
      <h4 className="text-white text-lg">{title}</h4>
      <p className="text-white max-w-[600px]">{paragraph}</p> 
    </div>
  );
};

export default FeatureCard;
