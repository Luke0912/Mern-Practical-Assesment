import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/Authcontext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { auth, handleAuth } = useContext(AuthContext);
  // const routes = [
  //   { title: "Home", to: "/Home", id: 1 },
  //   { title: "Login", to: "/Login", id: 2 },
  //   { title: "SignUp", to: "/", id: 3 },
  //   { title: "Logout", to: "/Logout", id: 4 },
  // ];
  const logoutHandler = () => {
    handleAuth(false);
    navigate("/");
    // log user out. it's just an inmemory value in context api
    return;
  };
  return (
    <>
      <div className={styles.navbaroutline}>
        <div className={styles.title}>
          {/* <Link to={"/Home"}>Home</Link> */}
          {auth && <Link to={"/Home"}>Home</Link>}
          {auth && (
            <Link to={"/Login"} onClick={logoutHandler}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
