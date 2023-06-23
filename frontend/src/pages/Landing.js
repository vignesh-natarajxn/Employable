import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { LogoLong } from "../components/";

import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from "react";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <div
      style={{
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Link to="/landing">
            <LogoLong />
          </Link>
          <Link
            style={{ marginLeft: "auto" }}
            to="/register"
            className="btn btn-hero"
          >
            Login / Register
          </Link>
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1 style={{ marginTop: "2rem" }}>
              Track Your<span> Job </span> or{" "}
              <span>University Applications </span>Effectively. Elegantly.
            </h1>
            <p>
              Manage your job or university applications through
              advanced features and analytics. Create a new account for free, or
              login as a guest now!
            </p>
            <Link
              style={{ minWidth: "16rem" }}
              to="/register"
              className="btn btn-temp"
            >
              Get Started
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Landing;
