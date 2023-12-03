const ReconnectSection = () => {
  return (
    <div className="card">
      <h3 className="card_title">Reconnect account</h3>
      <p className="card_desc">
        (Enter mpesa code below from the payment you made eg:QAH9QWWZRR)
      </p>
      <form className="form">
        <input
          type="text"
          placeholder="Enter Mpesa Code you paid with"
          aria-label="mpesa code"
          className="form_control"
        />
        <button className="form_btn btn_reconnect" type="submit">
          Reconnect
        </button>
      </form>
    </div>
  );
};
export default ReconnectSection;
