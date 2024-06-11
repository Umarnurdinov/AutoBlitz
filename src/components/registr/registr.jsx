import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeNumber } from "../../store/slices/number";
import "./registr.scss";

function Registr() {
  const [user, setUser] = useState({
    phone: "+996",
    password: "",
  });
  const [userVer, setUserVer] = useState({
    phone: "",
    otp: "",
  });
  const [registrationStep, setRegistrationStep] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();

  function postUser(event) {
    event.preventDefault();
    axios
      .post("http://13.49.229.91:8000/register/", user)
      .then((res) => {
        dispatch(storeNumber(user.phone));
        setUserVer({ ...userVer, phone: user.phone });
        setRegistrationStep(true);
      })
      .catch((err) => {
        console.error(err);
        alert("Registration failed. Please try again.");
      });
  }

  function verifyOtp(event) {
    event.preventDefault();

    axios
      .post("http://13.49.229.91:8000/verify/", userVer)
      .then((res) => {
        console.log(res);
        nav("/dashboard");
      })
      .catch((err) => {
        console.error(err);
        alert("OTP verification failed. Please try again.");
      });
  }

  function goBack() {
    nav(-1);
  }

  return (
    <div className="registration-container">
      <button className="back-button" type="button" onClick={goBack}>
        Назад
      </button>
      <h1 className="registration-header">Registration Page</h1>
      {!registrationStep ? (
        <form className="registration-form" onSubmit={postUser}>
          <input
            className="registration-input"
            placeholder="Write your phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            type="text"
          />
          <input
            className="registration-input"
            placeholder="Write your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
          />
          <button className="registration-button" type="submit">
            Зарегистрироваться
          </button>
        </form>
      ) : (
        <form className="verification-form" onSubmit={verifyOtp}>
          <input
            className="verification-input"
            placeholder="Write your phone"
            value={userVer.phone}
            onChange={(e) => setUserVer({ ...userVer, phone: e.target.value })}
            type="text"
          />
          <input
            className="verification-input"
            placeholder="Write your OTP"
            value={userVer.otp}
            onChange={(e) => setUserVer({ ...userVer, otp: e.target.value })}
            type="text"
          />
          <button className="verification-button" type="submit">
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
}

export default Registr;
