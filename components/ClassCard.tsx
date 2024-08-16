"use client";

import Image from "next/image";
import Link from "next/link";
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
      className="relative w-full h-[300px] lg:h-[485px] flex
              justify-center items-center"
    >
      <div className="bg-black/55 absolute w-full h-full top-0 z-10"></div>
      <Image src={image} fill={true} className="object-cover" alt={alt} />
      <div className="z-10 flex flex-col justify-around ">
        <h4 className="text-white text-center text-4xl ">{title}</h4>
        <p className="text-white max-w-[600px] text-lg  mt-12 text-center">
          {paragraph}
        </p>

        <Link
          href="/classes"
          className="flex gap-2 mt-10 justify-center transition-all "
        >
          <p className="text-white underline underline-offset-8 font-bold text-xl uppercase mt-1 ">
            learn more
          </p>
          <Icon className="text-accent text-4xl " />
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
