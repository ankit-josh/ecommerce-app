import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SingIn_img from "./SignInImg";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
//   const dummyPage = useNavigate();
    const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName:"",
    mobileNo: "",
    emailId: "",
    password: "",
  });
  // const [storeUserData, setStoreUserData] = useState({});
  const getdata = (e) => {
    const { value, name } = e.target;
    setInputValue(() => {
      return { ...inputValue, [name]: value };
    });
  };
  const addToLocal = (e) => {
    e.preventDefault();
    // const getUserData = localStorage.getItem("userData");
    // console.log(typeof getUserData);
    console.log(inputValue);
        const {firstName,lastname, mobileNo, emailId, password } = inputValue;
      if (firstName === "") {
          alert("Please enter your first name")
      } else if (lastname === "") {
          alert('Please enter your last name')
      }else if (!emailId.includes("@") && emailId === "") {
      alert("Enter valid email");
    } else if (mobileNo === "" && mobileNo.length < 11) {
      alert("Entered mobile number must be 10 digits");
    } else if (password === "") {
      alert("Password contains 8 characters");
      } else {
            const strData = JSON.stringify(inputValue)
            localStorage.setItem("addToLocal",strData)
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfirstName">
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={getdata}
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclastName">
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={getdata}
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="emailId"
                  onChange={getdata}
                  placeholder="Email Id"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="mobileNo"
                  onChange={getdata}
                  placeholder="Mobile No"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                className="col-lg-6"
                onClick={addToLocal}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account 
              <span>
                <NavLink to={"/signIn"}> Sign In</NavLink>
              </span>
            </p>
          </div>
          <SingIn_img />
        </section>
      </div>
    </>
  );
};

export default SignUp;
