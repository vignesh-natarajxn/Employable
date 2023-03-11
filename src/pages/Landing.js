import logo from "../assets/logo.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        {/* <img src={logo} alt="Employable" className="logo" /> */}
        <img alt="Logo" className="logo" />
      </nav>
      <div className="container-page">
        <div className="info">
          <h1>
            Track<span> Your </span> Job Applications
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
    </main>
  );
};

export default Landing;
