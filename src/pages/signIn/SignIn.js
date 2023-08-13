import React, { useState } from "react";
import "./SignIn.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // toast.success("Logged in successfull");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section className="signin">
      <div className="login">
        <h1>Sign In</h1>
      </div>
      <div className="login-ctn">
        <div className="login-left">
          <h3>ARE YOU A NEW USER?</h3>
          <p>
            <span>Sign up to personalize your experience</span>
          </p>
          <ul>
            <li>Save multiple searches</li>
            <li>Save favorite listings</li>
            <li>Take notes on listings</li>
            <li>Receive daily property updates by email.</li>
            <li>Schedule property showimngs</li>
          </ul>
        </div>
        <form onSubmit={login} className="login-right">
          <div className="login-info">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-info">
            <label cl htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log in</button>
          <p>
            Don't have an account?
            <button>
              <Link style={{textDecoration:'none', color:'black'}} to='/signup'> Create one here.</Link>
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
