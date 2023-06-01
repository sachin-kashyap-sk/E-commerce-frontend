import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Cart from "./Components/Pages/Cart/Cart";
import Mens from "./Components/Pages/Mens/index";
import Women from "./Components/Pages/Women/index";
import Navigation from "./Components/Nav/Navigation";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Login from "./Components/Pages/Login/Login";
import ProtectedRoute from "./Components/utils/ProtectedRoute";
import Register from "./Components/Pages/Register/Register";
function App() {
  return (
    <div>
      <ProtectedRoute>
        <Navigation />
      </ProtectedRoute>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Men"
          element={
            <ProtectedRoute>
              <Mens />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Women"
          element={
            <ProtectedRoute>
              <Women />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/About"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/contactUs"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
