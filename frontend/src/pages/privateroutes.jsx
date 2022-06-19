import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/Authcontext";
export const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to={"/Login"} replace={false} />;
  }
  return children;
};
