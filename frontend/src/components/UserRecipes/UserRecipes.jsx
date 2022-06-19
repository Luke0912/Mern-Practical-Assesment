import Button from "@mui/material/Button";
import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

import configuration from "../../config";

import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    },
  },
});

const UserRecipes = ({ recipe }) => {
  const [editable, setEditable] = useState(false);

  const [editableValues, setEditableValues] = useState({
    name: recipe.name,
    price: recipe.price,
    origin: recipe.origin,
    desc: recipe.desc,
  });

  const handleUserEdit = () => {
    setEditable((curr) => !curr);
  };

  const handleEditing = (e) => {
    const values = { ...editableValues };
    const nValues = { ...values, [e.target.name]: e.target.value };
    setEditableValues(nValues);
  };

  const onConfirm = async () => {
    const { _id, userId } = recipe;
    const payload = {
      userId: userId,
      name: editableValues.name,
      price: editableValues.price,
      origin: editableValues.origin,
      desc: editableValues.desc,
    };
    const resp = await axios.patch(
      configuration.BASE_URL.concat(`/product/${_id}`),
      payload
    );
    setEditableValues(resp.data);
    setEditable(false);
  };

  return (
    <>
      {!editable && <h4>Dish Name:{editableValues.name}</h4>}
      {editable && (
        <>
          <label for="dname">Dish Name:</label>
          <br />
          <input
            type="text"
            id="dname"
            placeholder="Dish Name"
            value={editableValues.name}
            name="name"
            onChange={handleEditing}
          />
          <br />
        </>
      )}
      {!editable && <p>Dish Price:{editableValues.price}</p>}
      {editable && (
        <>
          <label for="dprice">Dish Price:</label>
          <br />
          <input
            type="text"
            id="dprice"
            placeholder="Dish Price"
            value={editableValues.price}
            name="price"
            onChange={handleEditing}
          />
          <br />
        </>
      )}
      {!editable && <p>Dish Origin:{editableValues.origin}</p>}
      {editable && (
        <>
          <label for="dorigin">Dish Origin:</label>
          <br />
          <input
            type="text"
            id="dorigin"
            placeholder="Dish Origin"
            value={editableValues.origin}
            name="origin"
            onChange={handleEditing}
          />
          <br />
        </>
      )}
      {!editable && <p>Dish Description:{editableValues.desc}</p>}
      {editable && (
        <>
          <label for="ddesc">Description:</label>
          <br />
          <input
            type="text"
            id="ddesc"
            placeholder="Dish Desc"
            value={editableValues.desc}
            name="desc"
            onChange={handleEditing}
          />
          <br />
        </>
      )}

      {!editable && (
        <ThemeProvider theme={theme}>
          <Button variant="contained" onClick={handleUserEdit}>
            Edit Your Recipes
          </Button>
        </ThemeProvider>
      )}
      {editable && (
        <ThemeProvider theme={theme}>
          <Button variant="contained" onClick={onConfirm}>
            Confirm Changes
          </Button>
        </ThemeProvider>
      )}
      {editable && (
        <ThemeProvider theme={theme}>
          <Button variant="contained" onClick={() => setEditable(false)}>
            Cancel
          </Button>
        </ThemeProvider>
      )}
    </>
  );
};
export default UserRecipes;
