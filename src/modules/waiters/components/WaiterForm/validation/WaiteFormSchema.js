import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is a required")
    .min(2)
    .matches(/^[A-Z|А-Я]/g, "First leter should be big"),
});
