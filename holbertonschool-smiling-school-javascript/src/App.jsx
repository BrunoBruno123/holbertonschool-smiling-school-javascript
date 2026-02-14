import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
);