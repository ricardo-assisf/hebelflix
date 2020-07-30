import React from 'react';
import Logo from '../../assets/img/HebelFlix.png'
import '../Menu/Menu.css'


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da HebelFlix " />
            </a>

            <a className="ButtonLink" href="/">
                Nosso Video
            </a>

            </nav>
        );
        }


export default Menu;
