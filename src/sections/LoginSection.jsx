import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomInput from "../components/CustomInput";
import * as Yup from "yup";

const LoginSection = () => {
  const [viewPassword, setViewPassword] = useState("password");

  return (
    <div className="card">
      <div className="card_header">
        <h5>WIFI LOGIN</h5>
      </div>
      <p className="card_desc login_desc">
        (Enter your username and password to login)
      </p>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z{3,10}] $/, "username must be 3 characters long"),
          password: Yup.string()
            .required("Required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              "Enter a valid password"
            ),
        })}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <CustomInput
              type="text"
              placeholder="Username"
              aria-label="username"
              name="username"
            />

            <div
              className={`input_div ${
                errors.password && touched.password ? "input-error" : ""
              }`}
            >
              <div className="input_icon">
                {viewPassword === "password" ? (
                  <FaEye
                    onClick={() => {
                      setViewPassword("text");
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => {
                      setViewPassword("password");
                    }}
                  />
                )}
              </div>
              <Field
                placeholder="password"
                aria-label="password"
                name="password"
                type={viewPassword}
                className="form_control"
              />
            </div>
            <p className="text_error">
              <ErrorMessage name="password" />
            </p>
            <button className="btn" type="submit">
              LOGIN
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginSection;
