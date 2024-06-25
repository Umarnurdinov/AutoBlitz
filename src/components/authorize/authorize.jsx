import React, { useState, useRef, useEffect } from "react";
import "./authorize.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeNumber } from "../../store/slices/number";

const Authorize = () => {
  const [phone, setPhone] = useState("+996");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    phone: "+996",
    password: "",
  });
  const [userVer, setUserVer] = useState({
    phone: "",
    otp: "",
  });
  const [registrationStep, setRegistrationStep] = useState(false);
  const [verificationCodeField, setVerificationCodeField] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const dispatch = useDispatch();
  const nav = useNavigate();
  const prismRef = useRef();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      fetchUserInfo(token);
    }
  }, []);

  const fetchUserInfo = (token) => {
    axios
      .get("http://13.49.229.91:8000/user-info/", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const postUser = (event) => {
    event.preventDefault();

    const userPayload = {
      phone: user.phone,
      password: user.password,
    };

    if (!userPayload.phone || userPayload.password.length < 8) {
      alert(
        "Please provide a valid phone number and a password with at least 8 characters."
      );
      return;
    }

    axios
      .post("http://13.49.229.91:8000/register/", userPayload)
      .then((res) => {
        if (res.data.message === "Код отправлен") {
          dispatch(storeNumber(user.phone));
          setUserVer({ ...userVer, phone: user.phone });
          setRegistrationStep(true);
          setVerificationCodeField(true);
        } else {
          alert("Unexpected response from server.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Registration failed. Please try again.");
      });
  };

  const verifyOtp = (event) => {
    event.preventDefault();

    if (!userVer.otp) {
      alert("Please provide the OTP sent to your phone.");
      return;
    }

    axios
      .post("http://13.49.229.91:8000/verify-otp/", userVer)
      .then((res) => {
        const { token } = res.data;
        console.log("OTP verification successful, token:", token);
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        fetchUserInfo(token);
        nav("/");
      })
      .catch((err) => {
        console.error(err);
        alert("OTP verification failed. Please try again.");
      });
  };

  const loginUser = (event) => {
    event.preventDefault();
    axios
      .post("http://13.49.229.91:8000/login/", { phone, password })
      .then((response) => {
        const { token } = response.data;
        console.log("Login successful, token:", token);
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        fetchUserInfo(token);
        nav("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Login failed. Please try again.");
      });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserInfo({});
    setActiveTab("login");
    prismRef.current.style.transform = "translateZ(-100px)";
    nav("/");
  };

  const showSignup = () => {
    setActiveTab("signup");
    prismRef.current.style.transform = "translateZ(-100px) rotateY(-90deg)";
  };

  const showLogin = () => {
    setActiveTab("login");
    prismRef.current.style.transform = "translateZ(-100px)";
  };

  const showForgotPassword = () => {
    setActiveTab("forgotPassword");
    prismRef.current.style.transform = "translateZ(-100px) rotateY(-180deg)";
  };

  const showThankYou = () => {
    setActiveTab("");
    prismRef.current.style.transform = "translateZ(-100px) rotateX(90deg)";
  };

  return (
    <div className="container">
      <div className="login-container">
        {!isAuthenticated ? (
          <>
            <ul className="nav">
              <li
                className={activeTab === "login" ? "active" : ""}
                onClick={showLogin}
              >
                Login
              </li>
              <li
                className={activeTab === "signup" ? "active" : ""}
                onClick={showSignup}
              >
                Sign up
              </li>
              <li
                className={activeTab === "forgotPassword" ? "active" : ""}
                onClick={showForgotPassword}
              >
                Forgot password
              </li>
            </ul>
            <div className="wrapper">
              <div className="rec-prism" ref={prismRef}>
                <div className="face face-front">
                  <div className="content">
                    <h2>Login</h2>
                    <form onSubmit={loginUser}>
                      <div className="field-wrapper">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <label>Phone number</label>
                      </div>
                      <div className="field-wrapper">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                      </div>
                      <div className="field-wrapper">
                        <input type="submit" value="Login" />
                      </div>
                      <span className="psw" onClick={showForgotPassword}>
                        Forgot Password?
                      </span>
                    </form>
                  </div>
                </div>
                <div className="face face-back">
                  <div className="content">
                    <h2>Forgot your password?</h2>
                    <small>
                      Enter your phone number so we can send you a reset link
                      for your password
                    </small>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="field-wrapper">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <label>Phone number</label>
                      </div>
                      <div className="field-wrapper">
                        <input
                          type="submit"
                          value="Reset Password"
                          onClick={showThankYou}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="face face-right">
                  <div className="content">
                    <h2>Sign up</h2>
                    <form onSubmit={registrationStep ? verifyOtp : postUser}>
                      <div className="field-wrapper">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone number"
                          value={user.phone}
                          onChange={(e) =>
                            setUser({ ...user, phone: e.target.value })
                          }
                        />
                        <label>Phone number</label>
                      </div>
                      <div className="field-wrapper">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                        />
                        <label>Password</label>
                      </div>
                      {verificationCodeField && (
                        <div className="field-wrapper">
                          <input
                            type="text"
                            name="verificationCode"
                            placeholder="Verification code"
                            value={userVer.otp}
                            onChange={(e) =>
                              setUserVer({ ...userVer, otp: e.target.value })
                            }
                          />
                          <label>Verification code</label>
                        </div>
                      )}
                      <div className="field-wrapper">
                        <input
                          type="submit"
                          value={registrationStep ? "Verify OTP" : "Sign up"}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="face face-top">
                  <div className="content">
                    <h2>Thank you!</h2>
                    <button onClick={showLogin}>Back to login</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="user-info">
            <h2>Welcome, {userInfo.name}</h2>
            <button onClick={logoutUser}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authorize;
