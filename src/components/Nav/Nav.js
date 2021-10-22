import React, {useEffect, useState} from 'react'
import LoginButton from '../LoginButton/LoginButton';
import MenuDropDown from '../Menu/MenuDropDown';
import './Nav.css'



function Nav() {
    const [show, handleShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         }
    //         else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll")
    //     }
    // }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav">
                <img
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                ></img>
                <div></div>
               <MenuDropDown />
            </div>
        </div>
    )
}

export default Nav
