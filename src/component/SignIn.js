import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SingIn_img from "./SignInImg";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const dummyPage = useNavigate();
  const [inputValue, setInputValue] = useState({
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
    const getUserData = localStorage.getItem("userData");
    console.log(typeof getUserData);
    console.log(inputValue);
    const { mobileNo, emailId, password } = inputValue;
    if (!emailId.includes("@") && emailId === "") {
      alert("Enter valid email");
    } else if (mobileNo === "" && mobileNo.length < 11) {
      alert("Entered mobile number must be 10 digits");
    } else if (password === "") {
      alert("Password contains 8 characters");
    } else {
      // if (getUserData) {
      //     const userData = JSON.parse(getUserData)
      //     console.log(userData);
      //         const checkData = userData.filter(function(ele,index){
      //             return ele.emailId === emailId && ele.password === password && ele.mobileNo === mobileNo;
      //         })
      //         console.log(checkData);
      //     }
      dummyPage("/dummy");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
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
                Sign In
              </Button>
            </Form>
            <p className="mt-3">
              Go to
              <span>
                <NavLink to={"/"}> SignUp</NavLink>
              </span>
            </p>
          </div>
          <SingIn_img />
        </section>
      </div>
    </>
  );
};

export default SignIn;
