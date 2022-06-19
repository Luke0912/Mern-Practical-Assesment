import Button from "@mui/material/Button";
import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./homepage.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/Authcontext";
import UserRecipes from "../../components/UserRecipes/UserRecipes";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    },
  },
});

export const Home = () => {
  const { id, button, handleRender } = useContext(AuthContext);
  const navigate = useNavigate();

  const [item, setItem] = useState([]);

  const handleView = () => {
    axios.get("http://localhost:5000/product").then((data) => {
      setItem(data.data);
    });
    handleRender(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    navigate("/Addrecipes");
  };

  const handleViewUser = () => {
    axios.get(`http://localhost:5000/product/${id}`).then((data) => {
      setItem(data.data);
    });
    handleRender(true);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.add}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={handleAdd}>
              Add Recipe
            </Button>
          </ThemeProvider>
        </div>
        <div className={styles.viewall}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={handleView}>
              View All Recipes
            </Button>
          </ThemeProvider>
        </div>
        <div className={styles.view}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={handleViewUser}>
              View Your Recipes
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className={styles.list}>
        {item.map((e) => (
          <div key={e._id} className={styles.listitems}>
            {!button && (
              <>
                <h4>Dish Name:{e.name}</h4>
                <p>Price:{e.price}</p>
                <p>Origin:{e.origin}</p>
                <p>Description:{e.desc}</p>
              </>
            )}
            {button && <UserRecipes recipe={e} />}
          </div>
        ))}
      </div>
    </>
  );
};
