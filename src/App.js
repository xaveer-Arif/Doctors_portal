import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";
import Login from "./Form/Login/Login";
import SignIn from "./Form/SignIn/SignIn";
import PrivateRoute from "./Shared/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="logIn" element={<Login />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
