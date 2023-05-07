import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Navbar from "./navbar";
import About from "./About";
const Shell = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Shell;
