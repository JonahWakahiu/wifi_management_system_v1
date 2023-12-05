import { useEffect, useRef, useState } from "react";
import Package from "../components/Package";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const PackagesSection = () => {
  const [amount, setAmount] = useState(null);
  const [modal, setModal] = useState(false);
  const paymentInput = useRef(null);

  const modalButtonClick = () => {
    setModal(!modal);
    paymentInput.current.focus();

    paymentInput.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    setModal(!modal);
  }, [amount]);

  const handleSubmit = (values, actions) => {
    // e.preventDefault();
    alert(values.phone_number);
  };

  return (
    <>
      <div className="packages">
        <Package setAmount={setAmount} />

        {amount && modal && (
          <div className="modal">
            <div className="modal_body">
              <h3>
                You are about to pay KSH <span>{amount}</span>. Enter phone
                number below and press pay now
              </h3>

              <button
                className="btn modal_btn"
                onClick={modalButtonClick}
                type="button"
              >
                okay
              </button>
            </div>
          </div>
        )}
      </div>
      <Formik
        initialValues={{ phone_number: "" }}
        validationSchema={Yup.object().shape({
          phone_number: Yup.string()
            .required("Required")
            .matches(/^(07|01)\d{8}$/, "Invalid phone number"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <h4 className="card_desc">
              Tap one circle above and enter phone number to pay now
            </h4>
            <Field
              className={`form_control ${
                errors.phone_number && touched.phone_number ? "input-error" : ""
              }`}
              type="text"
              name="phone_number"
              innerRef={paymentInput}
              placeholder="Enter Phone Number"
              aria-label="phone_number"
            />
            <p className="text_error">
              <ErrorMessage name="phone_number" />
            </p>

            <button type="submit" className="btn btn_pay">
              Pay Now
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default PackagesSection;
