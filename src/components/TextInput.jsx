import React from "react";

const TextInput = ({
  disabled,
  type,
  img,
  icon,
  rightText,
  value,
  rightIcon,
  placeholder,
  onChange,
}) => {
  return (
    <div className=" flex rounded-md p-2 px-3 items-center mb-2 bg-textinput">
      {img ? (
        <img className="w-10 px-3" src={img} />
      ) : rightIcon ? (
        rightIcon
      ) : undefined}
      <input
        className="outline-none p-1 w-full  bg-textinput text-white"
        type={type}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon ? icon : <p className="ml-2 text-white">{rightText}</p>}
    </div>
  );
};

export default TextInput;
