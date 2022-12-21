import React from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <h1 className="home-page">HOME</h1>
          <NavLink to={"/signIn"}>
            <button className="signup-btn">signin</button>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
