import styles from "./signup.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const payload = {
    name: "",
    password: "",
  };

  const [details, setDetails] = useState({
    payload,
  });

  const handleInput = (e) => {
    const val = e.target.value;
    setDetails({
      ...details,
      [e.target.name]: val,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    try {
      const resp = await axios.post("http://localhost:5000/register", details, {
        headers: headers,
      });
      console.log(resp);
      navigate("/Login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGo = (e) => {
    e.preventDefault();
    navigate("/Login");
  };
  return (
    <>
      <div className={styles.form}>
        <h3>Sign Up</h3>
        <input
          type="text"
          placeholder="enter email"
          name="email"
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleInput}
        />
        <Button variant="outlined" onClick={handleRegister}>
          Signup
        </Button>
        <h3>Already Have a Account?</h3>
        <Button onClick={handleGo}>Go to Login Page</Button>
      </div>
    </>
  );
};
