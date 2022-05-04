import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import FormMenu from "../components/FormMenu/FormMenu";
import FormUpdateMenu from "../components/FormMenu/FormUpdateMenu";
import MenuList from "../components/MenuList";
import useMenu from "../hooks/useMenu";

export default function MenuPage() {
  const [open, setOpen] = useState(false);

  const { menuList, addMenu, deleteItemMenu, updateItemMenu } = useMenu();
  return (
    <div>
      <FormUpdateMenu />
      <Collapse in={open}>
        <div id="formMenu">
          <FormMenu addMenu={addMenu} open={open} setOpen={setOpen} />
        </div>
      </Collapse>

      <MenuList menuList={menuList} deleteItemMenu={deleteItemMenu} updateItemMenu={updateItemMenu} />
    </div>
  );
}
