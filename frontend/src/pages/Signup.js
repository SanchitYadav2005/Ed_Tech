import "../styles/LoginSignup.scss";
import imgSvg from "../assets/code.svg";
import logo from "../assets/logo.png";
import axios from "axios"; // Import Axios
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

  const sendData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/user/signup",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newToken = response.data.token; 
      localStorage.setItem("token", newToken); 
      console.log(response.data); 
    } catch (error) {
      console.error("Error occurred:", error); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
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
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn">Signup</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signup;