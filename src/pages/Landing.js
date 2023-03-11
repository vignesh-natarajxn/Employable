import logo from "../assets/logo.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt="Employable" className="logo" /> */}
        <img alt="Logo" className="logo" />
      </nav>
      <div className="container-page">
        <div className="info">
          <h1>
            Track Your<span> Job Applications </span>
          </h1>
          <p>
            {" "}
            This app enables you to effectively manage all your job applications
            by providing various features and analytics.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img alt="IMAGE" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    color: var(--grey-100);
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-200);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
