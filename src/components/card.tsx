import React from "react";

interface CardProp {
  title: string;
  description: string;
  classNameDiv: string;
  img?: string;
  classNameImg?: string;
  classNameH1: string;
  classNameP: string;
  classNameDiv2?: string;
}
const Card: React.FC<CardProp> = ({
  title,
  description,
  img,
  classNameDiv,
  classNameImg,
  classNameH1,
  classNameP,
  classNameDiv2,
}) => {
  return (
    <div className={classNameDiv}>
      <div className={classNameDiv2}>
        <img src={img} alt="" className={classNameImg} />
      </div>
      <div>
        <h1 className={classNameH1}>{title}</h1>
        <p className={classNameP}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
