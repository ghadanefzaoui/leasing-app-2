import * as Yup from "yup";

// Define schema with appropriate type checking
export const registrationSchema = Yup.object({
  email: Yup.string().email().required("Email id is required"),
  first: Yup.string().min(2).max(20).required("First name is required"),
  last: Yup.string().min(2).max(20).required("Last name is required"),
  password: Yup.string().min(6).required("Please enter your password"),
  repassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), ""], "Password must match"),
});
