import Logo from "../../Assets/Images/logo.png"

import {Link} from "react-router-dom";

import {NavBarContainer} from "./style";

const NavBar = () => {

    return (
        <NavBarContainer onresize = { () => console.log(window.innerWidth) } >

                <Link to={"/"}>
                    <img src={Logo} alt={"logo"} />
                </Link>
                <Link to={"/produtos"} >Produtos</Link>
                <Link to={"/confraternizacao"} >Confraternização</Link>
                <Link to={"/graduacao"} >Formatura</Link>
                <Link to={"/casamento"} >Casamento</Link>

        </NavBarContainer>
    );
};

export default NavBar;
