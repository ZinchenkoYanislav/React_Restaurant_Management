// import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
// import FormMenuSchema from "./validation/FormMenuSchema";

export default function FormUpdateMenu() {
    const [edit, setEdit] = useState('2')

    function onChangeHandler (e) {
        setEdit(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div>
      <form>
        name
        <input onChange={onChangeHandler} value={edit} type="text"></input>
        <button type="button">edit</button>
      </form>
    </div>
  );
}
