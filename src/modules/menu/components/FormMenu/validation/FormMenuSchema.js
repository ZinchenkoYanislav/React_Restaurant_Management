import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is a required").min(2),
  price: yup.string().required("Price is a required"),
});
