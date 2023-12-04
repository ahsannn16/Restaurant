import { useEffect, useState } from "react";

const useMenus = () => {
  console.log("Use menus function");
  const [menus, setMenus] = useState({});
  useEffect(() => {
    fetch("http://localhost:3030/menu")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return menus;
};

export default useMenus;
