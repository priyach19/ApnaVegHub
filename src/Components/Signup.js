import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
export default function Signup() {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,location}=user
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password,location}),
    });
    const data = response.json();
    if(data.status===422 || !data){
      console.log("invalid credentials")
    }

    else{
      alert("registration succesfull")
      navigate("/login")
    }
  };
  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="container d-flex justify-content-center m-5 ">
        <form method="POST">
          <h1 className="text-primary">Sign Up Form</h1>
          <br />
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1cg">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={onChange}
              id="form3Example1cg"
              className="form-control form-control-lg"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3cg">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              id="form3Example3cg"
              className="form-control form-control-lg"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4cg">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              id="form3Example4cg"
              className="form-control form-control-lg"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4cdg">
              Your location
            </label>
            <input
              type="geolocation"
              name="geolocation"
              value={user.geolocation}
              onChange={onChange}
              id="form3Example4cdg"
              className="form-control form-control-lg"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>

          <div className="text-center text-muted mt-5 mb-0">
            Have already an account?{" "}
            <Link to="/login" className="fw-bold text-body">
              <u>Login here</u>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
