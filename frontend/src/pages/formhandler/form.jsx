import { Button } from "@mui/material";
import { useState, useContext } from "react";
import styles from "./form.module.css";
import axios from "axios";

import { AuthContext } from "../../contexts/Authcontext";

import configuration from "../../config";

export const Form = () => {
  const { id } = useContext(AuthContext);

  // const [userId, setUserId] = useState(id);
  const payload = {
    name: "",
    price: "",
    origin: "",
    desc: "",
  };

  const [details, setDetails] = useState({
    userId: id,
    payload,
  });

  const handleInput = (e) => {
    const val = e.target.value;
    setDetails({
      ...details,
      [e.target.name]: val,
    });
  };
  const handleSubmit = async (e) => {
    try {
      console.log(details);
      e.preventDefault();
      const resp = await axios.post(
        configuration.BASE_URL.concat("/createproduct"),
        details
      );
      console.log(resp);
      if (resp.status !== 200) {
        throw new Error("Unable to submit");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          onChange={handleInput}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleInput}
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          onChange={handleInput}
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          onChange={handleInput}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Add Dish
        </Button>
      </div>
    </>
  );
};
