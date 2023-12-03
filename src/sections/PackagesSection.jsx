import { useEffect, useState } from "react";
import Package from "../components/Package";

const PackagesSection = () => {
  const [amount, setAmount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(!modal);
  }, [amount]);

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
                className="modal_body-btn"
                onClick={() => setModal(!modal)}
                type="button"
              >
                okay
              </button>
            </div>
          </div>
        )}
      </div>
      <form className="form">
        <h4>{amount}</h4>
        <h4>Tap one circle above and enter phone number to pay now</h4>
        <input
          type="text"
          aria-label="phone_number"
          placeholder="Enter Phone Number"
          className="form_control"
        />
        <button type="submit" className="form_btn btn_pay">
          Pay Now
        </button>
      </form>
    </>
  );
};
export default PackagesSection;
