import React from "react";
import { useParams } from "react-router-dom";
import WaiterHeader from "../components/Waiter/WaiterHeader";
import useWaiter from "../hooks/useWaiter";

export default function WaiterPage() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  console.log(waiter);
  return (
    <div>
      <WaiterHeader waiter={waiter} />
    </div>
  );
}
