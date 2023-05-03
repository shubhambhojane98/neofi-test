import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import DropDown from "./DropDown";
import useData from "../hooks/useAllTokenNames";

const Card = () => {
  const { token } = useData();

  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("0.0");

  function crytoCoversion(token, value) {
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${token}&tsyms=INR`
    )
      .then((res) => res.json())
      .then((json) => {
        setResult(value / json.INR);
      });
  }

  useEffect(() => {
    crytoCoversion(selected?.CoinInfo?.Name, value);
  }, [value]);

  return (
    <div className="relative bg-cardBackgroundColor shadow-2xl rounded-lg p-5 w-3/4 md:h-2/4  mt-52 md:flex md:flex-col  md: justify-evenly mx-auto  md:mt-32 md:w-1/4  ">
      <img
        className="h-10 w-10 absolute bottom-full ml-28 -top-4 md:ml-40 md:-top-10  md:h-20 md:w-20"
        src={
          selected
            ? `https://www.cryptocompare.com${selected?.CoinInfo.ImageUrl}`
            : `https://www.cryptocompare.com/media/37746251/btc.png`
        }
      />
      <div className="flex justify-between mb-2 md:px-2">
        <h1 className="text-white">Current Value</h1>
        <h1 className="text-purple font-bold">
          {selected ? selected.DISPLAY?.INR.PRICE : "0.00"}
        </h1>
      </div>
      <form className=" flex flex-col">
        <DropDown
          selected={selected.CoinInfo}
          setSelected={(args) => setSelected(args)}
          data={token}
        />
        <div>
          <h5 className="mb-2 text-white">Amount you want to invest</h5>
          <TextInput
            onChange={(ev) => setValue(ev.target.value)}
            type={"number"}
            rightText={"INR"}
          />
        </div>
        <div>
          <h5 className="mb-2 text-white">
            Estimate Number of ETH You will Get
          </h5>
          <TextInput value={result ? result : "0.0"} disabled={true} />
        </div>
        <button className="bg-gradient-to-t from-blue to-purple rounded-lg p-2 mt-2">
          Buy
        </button>
      </form>
    </div>
  );
};

export default Card;
