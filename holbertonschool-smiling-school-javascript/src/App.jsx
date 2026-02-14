import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
