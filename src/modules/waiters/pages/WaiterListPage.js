import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import WaiterForm from "../components/WaiterForm/WaiterForm";
import WaiterList from "../components/WaiterList";
import useWaiterList from "../hooks/useWaiterList";

export default function WaiterListPage() {
  const waiterList = useWaiterList();
  console.log(waiterList)
  const [open, setOpen] = useState(false);
  return (
    <>
      <WaiterList waiterList={waiterList} />
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="formWaiter"
          aria-expanded={open}
        >
          Add Waiter
        </Button>
        <Collapse in={open}>
          <div id="formWaiter">
            <WaiterForm waiterList={waiterList} />
          </div>
        </Collapse>
      </>
    </>
  );
}
