import { useEffect, useState } from "react";

const useAwards = () => {
  const [awards, setAwards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/awards")
      .then((res) => res.json())
      .then((data) => setAwards(data));
  }, []);

  return [awards];
};

export default useAwards;
