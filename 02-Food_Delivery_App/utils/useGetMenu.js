import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useGetMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(API_URL);
      const json = await data.json();
      setMenuInfo(json.data);
    };
    getData();
  }, []);

  return menuInfo;
};

export default useGetMenu;
