import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import "../styles/Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // 👈 Initialize navigation
  const BASE_URL = "https://vaultifly-backend.onrender.com/api/auth";

  /* ---------------------- LOGIN FUNCTION ---------------------- */
  const handleLogin = async () => {
    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful ✅");

        // ✅ Store user info and token in session storage
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("username", data.username);

        // ✅ Navigate to landing page
        navigate("/landing");
      } else {
        setMessage(data.message || "Login failed ❌");
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    }
  };

  /* ---------------------- SEND OTP ---------------------- */
  const handleSendOtp = async () => {
    try {
      const res = await fetch(`${BASE_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setOtpSent(true);
        setMessage("OTP sent to your email 📩");
      } else {
        setMessage(data.message || "Failed to send OTP ❌");
      }
    } catch (err) {
      setMessage("Server error while sending OTP.");
    }
  };

  /* ---------------------- VERIFY OTP & SIGNUP ---------------------- */
  const handleVerifySignup = async () => {
    try {
      const res = await fetch(`${BASE_URL}/verify-otp-signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password, otp }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Signup successful ✅ Please login now.");
        setIsSignup(false);
        setOtpSent(false);
      } else {
        setMessage(data.message || "Signup failed ❌");
      }
    } catch (err) {
      setMessage("Server error during signup.");
    }
  };

  return (
    <form
      className="form"
      onSubmit={(e) => e.preventDefault()} // prevent page reload
    >
      <p id="heading">{isSignup ? "Sign Up" : "Login"}</p>

      {/* Email Field */}
      <div className="field">
        <input
          autoComplete="off"
          placeholder="Email"
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Username (for signup only) */}
      {isSignup && (
        <div className="field">
          <input
            placeholder="Username"
            className="input-field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}

      {/* Password */}
      <div className="field">
        <input
          placeholder="Password"
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* OTP Field (after sending) */}
      {isSignup && otpSent && (
        <div className="field">
          <input
            placeholder="Enter OTP"
            className="input-field"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
      )}

      {/* Buttons */}
      <div className="btn">
        {!isSignup ? (
          <>
            <button type="button" className="button1" onClick={handleLogin}>
              Login
            </button>
            <button
              type="button"
              className="button2"
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            {!otpSent ? (
              <button type="button" className="button1" onClick={handleSendOtp}>
                Send OTP
              </button>
            ) : (
              <button
                type="button"
                className="button1"
                onClick={handleVerifySignup}
              >
                Verify OTP
              </button>
            )}
            <button
              type="button"
              className="button2"
              onClick={() => {
                setIsSignup(false);
                setOtpSent(false);
                setMessage("");
              }}
            >
              Back to Login
            </button>
          </>
        )}
      </div>

      <p className="info-text">{message}</p>

      {!isSignup && (
        <button type="button" className="button3">
          Forgot Password
        </button>
      )}
    </form>
  );
};

export default LoginForm;
