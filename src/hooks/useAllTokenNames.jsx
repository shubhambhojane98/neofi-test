import { useEffect, useState } from "react";

function useData() {
  const [token, setToken] = useState([]);

  const getAllToken = () => {
    return fetch(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=INR"
    )
      .then((res) => res.json())
      .then((json) => {
        setToken(json.Data);
      });
  };

  useEffect(() => {
    getAllToken();
  }, []);

  return { token };
}

export default useData;
