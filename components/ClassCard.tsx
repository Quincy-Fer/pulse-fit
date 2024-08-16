"use client";

import Image from "next/image";
import { IconType } from "react-icons";

const ClassCard = ({
  title,
  paragraph,
  icon: Icon,
  image,
  alt,
}: {
  title: string;
  paragraph: string;
  icon: IconType;
  image: string;
  alt: string;
}) => {
  return (
    <div
      className="relative w-full h-[300px] lg:h-[485px] flex flex-col 
              justify-center items-center"
    >
      <div className="bg-black/40 absolute w-full h-full top-0 z-10"></div>
      <Image src={image} fill={true} className="object-cover" alt={alt} />
      <div className="z-30">
        <h4 className="">{title}</h4>
        <p className="">{paragraph}</p>

        <div className="flex">
          <p>learn more</p>
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
