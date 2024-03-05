/* eslint-disable no-unused-vars */
import "./App.css";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs'
function App() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

