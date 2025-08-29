import React from "react";

interface InputProp {
  type: string;
  placeholder?: string;
  className: string;
}
const Input: React.FC<InputProp> = ({ type, placeholder, className }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
};

export default Input;
