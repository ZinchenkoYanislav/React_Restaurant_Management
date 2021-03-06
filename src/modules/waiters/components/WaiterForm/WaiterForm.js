import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import WaiterFormSchema from "./validation/WaiteFormSchema";

export default function WaiterForm({ addWaiter, setOpen, open }) {
  const initValue = {
    name: "",
  };

  function onMySubmit(values, handleReset) {
    handleReset.resetForm();
    console.log(values);
    addWaiter(values.name);
    setOpen(!open)
  }

  return (
    <div>
      <Formik
        initialValues={initValue}
        onSubmit={onMySubmit}
        validationSchema={WaiterFormSchema}
      >
        <Form>
          <div>
            <label>
              Name <br />
              <Field name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
