import React, { useState } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // toast.error("Passwords do not match");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/signin");
      })
      .catch((error) => {
      
      });
  };

  return (
    <>
      <ToastContainer />
      <section>
        <div className="register">
          <h1>Sign Up</h1>
          <div className="form">
            <form onSubmit={register}>
              <div>
                <div className="register-info">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="register-info">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="register-info">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="checkbox">
                <div className="checkbox-item">
                  <input type="checkbox" />
                  <label htmlFor="">
                    Receive Our Email Updates - <span>Privacy Policy</span>{" "}
                  </label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" />
                  <label htmlFor=""> Receive Marketing Communications? </label>
                </div>
              </div>
              <h1 className="signup-assist">SO THAT WE MAY BETTER ASSIST YOU</h1>
              <button className="signup-btn" type="submit">Sign Up</button>
              <p>
                Already a user?{" "}
                <Link style={{textDecoration:'none'}} to='/signin'>
                  <span>Sign in here.</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
