import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define the types for form values
interface FormValues {
  name: string;
  lastname: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().min(2).max(5).required("Name is required!"),
  lastname: Yup.string().min(2).max(5).required("Last name is required!"),
});

// Initial form values
const initialValues: FormValues = {
  name: "",
  lastname: "",
};

const Signup: React.FC = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      console.log(action);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <div>{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastname && touched.lastname && <div>{errors.lastname}</div>}
        </div>
        <div>
          <button type="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
