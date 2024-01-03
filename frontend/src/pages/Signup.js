import "../styles/LoginSignup.scss";
import imgSvg from "../assets/code.svg";
import logo from "../assets/logo.png"
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="container">
        <section className="display">
          <img src={imgSvg} alt="code svg" className="svg" />
          <h2 className="heading">
            Get started with <span className="rainbow-text">Dezire</span>
          </h2>
          <p className="para">
            Be part of Dezire! Explore curated YouTube videos 📹, comprehensive
            notes 🗒️, and a vibrant community 🤝. Join us in exploring,
            learning, and connecting today! 🚀
          </p>
        </section>
        <section className="form">
          <img src={logo} alt="dezires logo" />
          <form>
            <input
              type="email"
              placeholder="Email"
              className="input-email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="btn">Signup</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signup;
