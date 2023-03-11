import logo from "../assets/logo.svg";
import longlogo from "../assets/longlogo2.svg";
import main from "../assets/main.svg";
// import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img
          src={longlogo}
          alt="Employable"
          className="logo"
          style={{
            height: "80%",
          }}
        />
        {/* <img alt="Logo" className="logo" /> */}
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
            Effectively manage all your job applications through various
            features and analytics.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="IMAGE" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
