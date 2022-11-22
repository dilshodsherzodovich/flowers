import Info from "../Info/Info";
import NavbarMiddle from "../NavbarMiddle/NavbarMiddle";
import Navigations from "../Navigations/Navigations";
import Reklama from "../Reklama/Reklama";

const Navbar = () => {
    return (
        <div>
            <Reklama />
            <Info />
            <NavbarMiddle />
            <Navigations />
        </div>
    )
}

export default Navbar ;