import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import img1 from "../../../../assets/images/login.png";
import axios from "axios"; // Import Axios
import "./style.css";
import { useEffect } from "react";

// Yup schema for validating the login form
const loginSchema = Yup.object({
  email: Yup.string().email().required("Email id is required"),
  password: Yup.string().min(6).required("Password is required"),
});

const Login: React.FC = () => {
  const navigate = useNavigate(); // For redirection after successful login

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        // Call the login API here
        const response = await axios.post("http://localhost:5000/api/auth/login", values);

        if (response.data.token) {
          // Store the token in localStorage (or any other method like Context or Redux)
          localStorage.setItem("token", response.data.token);
          
          // Redirect user to a different page after successful login
          navigate("/dashboard"); // Change to your preferred route
        }
      } catch (error) {
        console.error("Error during login: ", error);
        alert("Login failed, please try again.");
      }
    },
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard"); // Redirect to dashboard if already logged in
    }
  }, [navigate]);
  return (
    <div className="w-100">
      <section
        className="p-5 w-100"
        style={{ backgroundColor: "#f7f7f7", borderRadius: ".5rem" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mt-4">Log in</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email && (
                            <small className="text-danger mt-1">
                              {errors.email}
                            </small>
                          )}
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
                            type="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password && (
                            <small className="text-danger mt-1">
                              {errors.password}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            className="btn-login"
                            size="sm"
                            type="submit"
                          >
                            Log in
                          </Button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Don't have an account? <Link to="/registration">Sign up</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={img1}
                      className="img-fluid w-100 ml-2"
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

export default Login;
