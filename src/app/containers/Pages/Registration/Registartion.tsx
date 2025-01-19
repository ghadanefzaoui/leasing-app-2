import React from "react";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { registrationSchema } from "./RegistrationSchema";
import img1 from "../../../../assets/images/login.png";
import "./style.css";
import axios from "axios";




// Define types for form values
interface FormValues {
  first: string;
  last: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  repassword: string;
  role: "user",
}

const initialValues: FormValues = {
  first: "",
  last: "",
  email: "",
  phone: "",
  address: "",
  repassword: "",
  password: "",
  role: "user",
};

const Registration: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik<FormValues>({
    initialValues,
    validationSchema: registrationSchema,

    onSubmit: async (values, action) => {
      setIsLoading(true);  // Set loading state to true before API call
      try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", {
          first_name: values.first,
          last_name: values.last,
          email: values.email,
          phone: values.phone,
          address: values.address,
          password: values.password,
          role: values.role,
        });
    
        if (response.status === 201) {
          alert("Registration successful!");
          action.resetForm();
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.log(error); // Log the entire error to understand it better
        if (axios.isAxiosError(error) && error.response) {
          alert(`Error: ${error.response.data.message || "Failed to register"}`);
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      }
      finally {
        setIsLoading(false);  // Reset loading state once done
      }
    },
    

    
  });

  return (
    <div className="w-100">
      <section
        className="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mt-4">Sign up</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            First Name
                          </label>
                          <input
                            id="first"
                            name="first"
                            className="form-control"
                            value={values.first}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.first && touched.first ? (
                            <small className="text-danger mt-1">
                              {errors.first}
                            </small>
                          ) : null}
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last" className="form-label">
                            Last Name
                          </label>
                          <input
                            id="last"
                            name="last"
                            className="form-control"
                            value={values.last}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.last && touched.last ? (
                            <small className="text-danger mt-1">
                              {errors.last}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (
                            <small className="text-danger mt-1">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                      </div>
                        {/* // Phone number input field : HYACO_19012025_New */}
                        <div className="row mt-3">
                      <div className="col text-left">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          className="form-control"
                          value={values.phone}
                          onChange={(e) => {
                            const regex = /^[0-9]*$/; // Allow only numbers
                            if (regex.test(e.target.value)) {
                              handleChange(e);
                            }
                          }}
                          onBlur={handleBlur}
                          maxLength={8} // Limit input to 8 characters
                        />
                        {errors.phone && touched.phone ? (
                          <small className="text-danger mt-1">
                            {errors.phone}
                          </small>
                        ) : null}
                      </div>
                    </div>

                      {/* // Address number input field : HYACO_19012025_New */}
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="address" className="form-label">
                          Address
                          </label>
                          <input
                            id="address"
                            name="address"
                            className="form-control"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.address && touched.address ? (
                            <small className="text-danger mt-1">
                              {errors.address}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.password && touched.password ? (
                            <small className="text-danger mt-1">
                              {errors.password}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="repassword" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            id="repassword"
                            name="repassword"
                            className="form-control"
                            value={values.repassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.repassword && touched.repassword ? (
                            <small className="text-danger mt-1">
                              {errors.repassword}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => resetForm()}
                          >
                            Clear
                          </Button>
                          {/* // Updated submit button with loading handling : HYACO_19012025_New */}
                          <Button
                          className="btn-login"
                          size="sm"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Registering..." : "Register"}
                        </Button>


                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Already have an account? <Link to="/login">Sign in</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={img1}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
