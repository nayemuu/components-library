import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Debounce from "./pages/Debounce/Debounce";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debounce" element={<Debounce />} />
      </Routes>
    </Router>
  );
}
