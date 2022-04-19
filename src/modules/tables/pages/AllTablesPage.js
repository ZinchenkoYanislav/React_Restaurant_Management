import React from "react";
import { useParams } from "react-router-dom";
import useWaiter from "../../waiters/hooks/useWaiter";
import AllTableHeader from "../components/AllTableHeader";
import AllTableList from "../components/AllTableList";
import useTable from "../hooks/useTable";

export default function AllTables() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  const {tableList} = useTable()
  return (
    <div>
      <AllTableHeader waiter={waiter} />
      <AllTableList tableList={tableList} />
    </div>
  );
}
