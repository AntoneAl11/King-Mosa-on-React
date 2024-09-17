import React from "react";
import Frame1 from './img/Frame 1.png';
import Frame2 from './img/Frame 2.png';
import Frame3 from './img/Frame 3.png';
import Logo from './img/Logo.PNG';

;

function Header(){
    return(
        <header>
            <img src={Logo} width="200px" alt="Logo King Mosa"/>
            <nav>
                <ul>
                    <li><a href="#"><img src={Frame1} width="200" alt="Menú"/></a></li>
                    <li><a href="#"><img src={Frame2} width="200" alt="Promociones"/></a></li>
                    <li><a href="#"><img src={Frame3} width="200" alt="Contacto"/></a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;