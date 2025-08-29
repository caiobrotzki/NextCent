import React from "react";

interface ButtonProp {
  title: string;
  className: string;
}

const Button: React.FC<ButtonProp> = ({ title, className }) => {
  return (
    <div>
      <button className={className}>{title}</button>
    </div>
  );
};

export default Button;
