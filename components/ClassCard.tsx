"use client";

import { IconType } from "react-icons";

const ClassCard = ({
  title,
  paragraph,
  icon: Icon,
  image,
}: {
  title: string;
  paragraph: string;
  icon: IconType;
  image: string;
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{paragraph}</p>
      <img src={image} alt="" />
      <div className="flex">
        <p>learn more</p>
        <Icon />
      </div>
    </div>
  );
};

export default ClassCard;
