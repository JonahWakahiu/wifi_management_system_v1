import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import * as Yup from "yup";

const ReconnectSection = () => {
  return (
    <div className="card">
      <h3 className="card_title">Reconnect account</h3>
      <p className="card_desc">
        (Enter mpesa code below from the payment you made eg:QAH9QWWZRR)
      </p>
      <Formik
        initialValues={{
          mpesa_code: "",
        }}
        validationSchema={Yup.object().shape({
          mpesa_code: Yup.string()
            .required("Required")
            .matches(
              /^(?=(?:\D*\d\D*){3,5}$)[A-Za-z0-9]{10}$/,
              "Enter a valid mpesa code"
            ),
        })}
        onSubmit={(values) => alert(values.mpesa_code)}
      >
        <Form className="form">
          <CustomInput
            type="text"
            name="mpesa_code"
            placeholder="Enter Mpesa Code you paid with"
            aria-label="mpesa code"
          />

          <button className="btn btn_reconnect" type="submit">
            Reconnect
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ReconnectSection;
