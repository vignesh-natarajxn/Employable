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
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Link to="/landing" style={{ height: "100%", marginTop: "40px" }}>
            <LogoLong />
          </Link>
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1
              style={{
                fontSize: "100px",
                fontFamily: "fantasy",
              }}
            >
              Employable
            </h1>
            <h1>
              Track Your<span> Job </span> or{" "}
              <span>University Applications. </span>
            </h1>
            <p>
              Effectively manage all your job or university applications through
              advanced features and analytics. Create a new account for free, or
              login now!
            </p>
            <Link to="/register" className="btn btn-hero">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
