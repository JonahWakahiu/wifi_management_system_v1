const VoucherSection = () => {
  return (
    <div className="card">
      <h3 className="card_title">Voucher recharge</h3>
      <p className="card_desc">
        (Call admin for voucher recharge incase payment is not successful)
      </p>
      <form className="form">
        <input
          type="text"
          placeholder="Enter voucher code"
          className="form_control"
        />
        <button className="form_btn btn_voucher" type="submit">
          Activate voucher
        </button>
      </form>
    </div>
  );
};
export default VoucherSection;
