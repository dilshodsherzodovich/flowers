import "./Navbar.scss";
import Info from "../Info/Info";
import NavbarMiddle from "../NavbarMiddle/NavbarMiddle";
import Navigations from "../Navigations/Navigations";
import Reklama from "../Reklama/Reklama";

const Navbar = () => {
  return (
    <div className="navbar">
      <Reklama />
      <Info />
      <NavbarMiddle />
      <Navigations />
    </div>
  );
};

export default Navbar;
