import "./App.css";
import { Navbar } from "./components/navbarhandler/navbar";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "./pages/homepagehandler/homepage";
import { Login } from "./pages/signinhandler/login";
import { Signup } from "./pages/signuphandler/signup";
import { Form } from "./pages/formhandler/form";
import { ProtectedRoute } from "./pages/privateroutes";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/Addrecipes" element={<Form />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route
          path="/Addrecipes"
          element={
            <ProtectedRoute>
              <Form />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
