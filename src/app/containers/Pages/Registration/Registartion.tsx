import React from "react";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { registrationSchema } from "./RegistrationSchema";
import img1 from "../../../../assets/images/login.png";
import "./style.css";

// Define types for form values
interface FormValues {
  first: string;
  last: string;
  email: string;
  password: string;
  repassword: string;
}

const initialValues: FormValues = {
  first: "",
  last: "",
  email: "",
  repassword: "",
  password: "",
};

const Registration: React.FC = () => {
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
    onSubmit: (values, action) => {
      alert(
        "Form is valid now!. You can make a call to API inside onSubmit function"
      );
      action.resetForm();
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

                          <Button
                            className="btn-login"
                            size="sm"
                            type="submit"
                          >
                            Register
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
