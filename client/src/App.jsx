import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
axios.defaults.withCredentials = true;
import { useSelector } from "react-redux";
import { lazy } from "react";
const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const Work = lazy(() => import("./pages/work"));
const About = lazy(() => import("./pages/about"));
const Success = lazy(() => import("./pages/success"));
const Notfound = lazy(() => import("./pages/notfound"));
import Upbutton from "./components/upbutton";
import Viewbutton from "./components/viewbutton";
import MenubuttonNav2 from "./components/menubutton&nav2";

function App() {
  const successbooleen = useSelector((state) => state.successbooleen.value);
  const location = useLocation();

  return (
    <>
      <Navbar />
      <MenubuttonNav2 />
      <Viewbutton />
      <Upbutton />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location?.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/success"
            element={successbooleen ? <Success /> : <Notfound />}
          />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
