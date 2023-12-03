import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
      <form className="form">
        <input
          type="text"
          className="form_control"
          placeholder="Username"
          aria-label="username"
        />
        <div className="input_div">
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
          <input
            type={viewPassword}
            className="form_control"
            placeholder="Password"
            aria-label="password"
          />
        </div>
        <button className="form_btn" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};
export default LoginSection;
