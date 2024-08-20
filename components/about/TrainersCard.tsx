import Image from "next/image";
import React from "react";

const TrainersCard = ({
  image,
  alt,
  name,
  paragraph,
  title,
}: {
  image: string;
  alt: string;
  name: string;
  paragraph: string;
  title: string;
}) => {
  return (
    <div className="relative group  overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <div className="w-[400px] h-[400px] relative border-2 border-black">
        <Image src={image} fill alt={alt} className="bg-cover bg-center" />
      </div>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0  bg-red-700 bg-opacity-100 
        flex flex-col items-center justify-center opacity-0 group-hover:opacity-100
         transition-opacity duration-300"
      >
        <h5 className="text-white text-2xl">{name}</h5>
        <p className="text-white tracking-[1px]">{title}</p>
        <p className="text-white p-8 mt-2 leading-loose">{paragraph}</p>
      </div>
    </div>
  );
};

export default TrainersCard;
