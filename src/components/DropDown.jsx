import React, { useState } from "react";
import TextInput from "./TextInput";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const DropDown = ({ data, selected, setSelected }) => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="relative">
      <div onClick={() => setShow(!show)}>
        <TextInput
          img={
            selected
              ? `https://www.cryptocompare.com${selected?.ImageUrl}`
              : null
          }
          icon={
            <AiOutlineCaretDown
              className={`text-purple ml-2 ${show && "rotate-180"}`}
            />
          }
          type={"text"}
          disabled={true}
          value={selected?.FullName}
        />
      </div>
      <div
        className={`bg-cardBackgroundColor absolute w-full overflow-y-auto top-0 ${
          show ? "max-h-72" : "max-h-0"
        }`}
      >
        <div
          onClick={() => setShow(false)}
          className="flex justify-end p-3  text-white "
        >
          <AiOutlineClose />
        </div>
        <ul className="flex flex-col pl-6 justify-center ">
          <div className="mt-2 mx-2">
            <TextInput
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              rightIcon={<AiOutlineSearch color="white" />}
              placeholder={"Search chains"}
            />
          </div>
          {data.map((token) => (
            <li
              key={token.CoinInfo.Id}
              className={`flex flex-row items-center p-2 text-white  ${
                token.CoinInfo?.FullName.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
              }`}
              onClick={() => {
                setSelected(token), setShow(false);
              }}
            >
              <img
                className="w-10 h-9"
                src={`https://www.cryptocompare.com${token.CoinInfo.ImageUrl}`}
              />
              <p className="ml-4">{token?.CoinInfo?.FullName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
