import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useWaiter from "../../waiters/hooks/useWaiter";
import FormMenu from "../components/FormMenu/FormMenu";
import MenuHeader from "../components/MenuHeader";
import MenuList from "../components/MenuList";
import useMenu from "../hooks/useMenu";

export default function MenuPage() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  const [open, setOpen] = useState(false);

  const { menuList, addMenu, deleteItemMenu } = useMenu();
  return (
    <div>
      <MenuHeader waiter={waiter} open={open} setOpen={setOpen} />
      <Collapse in={open}>
        <div id="formMenu">
          <FormMenu addMenu={addMenu} open={open} setOpen={setOpen} />
        </div>
      </Collapse>

      <MenuList menuList={menuList} deleteItemMenu={deleteItemMenu} />
    </div>
  );
}
