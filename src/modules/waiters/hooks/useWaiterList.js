import { useEffect } from "react";
import { useState } from "react";
import { apiDelWaiter, fetchWaiters, postWaiter, apiUpdateWaiter } from "../services/waitersService";

export default function useWaiterList() {
  const [waiterList, setWaiterList] = useState([]);

  useEffect(() => {
    fetchWaiters().then(({ data }) => setWaiterList(data));
  }, []);

  function addWaiter(name) {
    postWaiter(name).then(({ data }) => {
      const newWaiters = [...waiterList, data];
      setWaiterList(newWaiters);
    });
  }

  function deleteWaiter(id) {
    apiDelWaiter(id).then(({data}) => {
      console.log(data)
      const newWaiters = waiterList.filter((item) => item.id !== id)
      setWaiterList(newWaiters)
    })
  }

  function updateWaiter(id, name) {
    apiUpdateWaiter(id, name).then(({data}) => {
        const deletedWaiter = waiterList.filter((item) => item.id !== id)
        const newWaiters = [...deletedWaiter, data]
        console.log(newWaiters)
        setWaiterList(newWaiters)
    })
}
  return {
    waiterList,
    addWaiter,
    deleteWaiter,
    updateWaiter
  };
}
