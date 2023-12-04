import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import * as Yup from "yup";

const VoucherSection = () => {
  return (
    <div className="card">
      <h3 className="card_title">Voucher recharge</h3>
      <p className="card_desc">
        (Call admin for voucher recharge incase payment is not successful)
      </p>
      <Formik
        initialValues={{ voucher_code: "" }}
        validationSchema={Yup.object().shape({
          voucher_code: Yup.string().required("Required"),
        })}
      >
        <Form className="form">
          <CustomInput
            type="text"
            placeholder="Enter voucher code"
            name="voucher_code"
          />

          <button className="btn btn_voucher" type="submit">
            Activate voucher
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default VoucherSection;
