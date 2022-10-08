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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyDashboard from "./Pages/Dashboard/MyDashboard/MyDashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview/MyReview";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./Shared/AdminRoute/AdminRoute";
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
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <MyDashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<MyAppointment/>}  />
          <Route path="review" element={<MyReview/>}  />
          <Route path="allUsers" element={<AdminRoute><AllUsers/></AdminRoute>} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="logIn" element={<Login />} />
        <Route path="signIn" element={<SignIn />} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
