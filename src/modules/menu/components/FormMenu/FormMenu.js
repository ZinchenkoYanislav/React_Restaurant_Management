import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import FormMenuSchema from "./validation/FormMenuSchema";

export default function FormMenu({addMenu, setOpen, open}) {
  const initValue = {
    name: "",
    price: "",
  };

  function onMySubmit(values, handleReset) {
    handleReset.resetForm();
    console.log(values);
    addMenu(values.name, values.price);
    setOpen(!open)
  }
  return (
    <div>
      <Formik
        initialValues={initValue}
        onSubmit={onMySubmit}
        validationSchema={FormMenuSchema}
      >
        <Form>
          <div>
            <label>
              Dish name <br />
              <Field name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </label>
          </div>
          <div>
            <label>
              Price <br />
              <Field name="price" />
              <ErrorMessage
                name="price"
                component="div"
                className="text-danger"
              />
            </label>
          </div>
          <h6>Photo generate auto</h6>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
