import { LogoLong } from "../components/";
import main from "../assets/images/main.svg";
// import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="/landing" style={{ height: "100%", marginTop: "40px" }}>
          <LogoLong />
        </Link>
      </nav>
      <div className="container page">
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
            Track Your<span> Job Applications. </span>
          </h1>
          <p>
            Effectively manage all your job applications through advanced
            features and analytics.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="IMAGE" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
