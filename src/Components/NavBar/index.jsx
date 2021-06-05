import {Link} from "react-router-dom";

import React from 'react';

const NavBar = () => {
    return (
        <div>
            <h2>ADM DE EVENTOS</h2>
            <Link to={"/"} >Home</Link>
            <Link to={"/produtos"} >Produtos</Link>
            <Link to={"/confraternizacao"} >Confraternização</Link>
            <Link to={"/graduacao"} >Formatura</Link>
            <Link to={"/casamento"} >Casamento</Link>
        </div>
    );
};

export default NavBar;
