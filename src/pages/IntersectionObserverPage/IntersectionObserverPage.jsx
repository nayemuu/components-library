import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/reusable/Navbar/Navbar";

const IntersectionObserverPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container my-[60px]">
        <Link to="/intersection-observer/demonetisation">
          Intersection Observer Demonetisation
        </Link>
      </div>
    </div>
  );
};

export default IntersectionObserverPage;
