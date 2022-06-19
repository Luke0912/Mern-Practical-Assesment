import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [id, setId] = useState(false);
  const [button, setButton] = useState(false);

  const handleAuth = (s) => {
    setAuth(s);
  };
  const handleState = (id) => {
    setId(id);
  };
  const handleRender = (button) => {
    setButton(button);
  };
  return (
    <AuthContext.Provider
      value={{ auth, handleAuth, id, handleState, button, handleRender }}
    >
      {children}
    </AuthContext.Provider>
  );
};
