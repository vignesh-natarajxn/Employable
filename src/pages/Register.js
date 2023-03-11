import { useState, useEffect } from "react";
import { LogoLong } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState); //global state

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <div style={{ height: "130px" }}>
          <Link to="/landing">
            <LogoLong />
          </Link>
        </div>
        <h3>Login</h3>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>

          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <Link to="/landing">
          <button
            className="btn btn-block"
            style={{ backgroundColor: "#232323", color: "white" }}
          >
            Cancel
          </button>
        </Link>
      </form>
    </Wrapper>
  );
}

export default Register;
