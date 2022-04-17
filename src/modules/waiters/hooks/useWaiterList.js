import { useEffect, useState } from "react";
import { fetchWaiters } from "../services/waitersService";

export default function useWaiterList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchWaiters().then(({ data }) => setList(data));
  }, []);
  return list;
}
