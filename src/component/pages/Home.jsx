import React from "react";
import Products from "../Products";

const Home = () => {
  return (
    <div className="Hero">
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="/assets/pg1.jpg"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
          </h5>
          <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          <div className="container"></div>
        </div>
      </div>
      <Products></Products>
    </div>
  );
};

export default Home;
