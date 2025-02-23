import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Debounce from "./pages/Debounce/Debounce";
import Home from "./pages/Home/Home";
import IntersectionObserverDemonetisation from "./pages/IntersectionObserverPage/IntersectionObserverDemonetisation/IntersectionObserverDemonetisation";
import IntersectionObserverPage from "./pages/IntersectionObserverPage/IntersectionObserverPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route
          path="/intersection-observer"
          element={<IntersectionObserverPage />}
        />
        <Route
          path="/intersection-observer/demonetisation"
          element={<IntersectionObserverDemonetisation />}
        />
      </Routes>
    </Router>
  );
}
