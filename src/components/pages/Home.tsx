import React, { useCallback, useEffect, useState } from "react";
import { ItemType, getList } from "src/api/list";

export const Home: React.FC = () => {
  const [list, setList] = useState<ItemType[]>([]);
  // const handleRequest = useCallback(async () => {
  //   const res = await getList();
  //   console.log(res);
  // }, []);

  // useEffect(() => {
  //   handleRequest();
  // }, [handleRequest]);

  return (
    <div>
      <p>Home2222</p>
    </div>
  );
};
export default Home;
