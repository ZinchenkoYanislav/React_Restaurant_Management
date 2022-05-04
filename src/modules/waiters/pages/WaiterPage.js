import React from "react";
import { useParams } from "react-router-dom";
import WaiterHeader from "../components/Waiter/WaiterHeader";
import useWaiter from "../hooks/useWaiter";

export default function WaiterPage() {
  const { id } = useParams();
  const waiter = useWaiter(id);
  // console.log(waiter);
  return (
    <div>
      <WaiterHeader waiter={waiter} />
    </div>
  );
}
