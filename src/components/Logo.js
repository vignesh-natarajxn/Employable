import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Employable"
      className="logo"
      style={{
        height: "80%",
      }}
    />
  );
};

export default Logo;
