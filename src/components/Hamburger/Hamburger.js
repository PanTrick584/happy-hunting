import React, { Component, useState } from 'react'

import './Hamburger.css'

const Hamburger = () => {

    const [menuClass, setMenuClass] = useState( 'menu' )


    const menuClick = () => {
        setMenuClass( 'menu menu-show' )
    }

    return (
        <div className="menu-hamburger">
            <div className="hamburger" onClick={ menuClick } >
                <div className="hamburger-item"></div>
                <div className="hamburger-item"></div>
                <div className="hamburger-item"></div>
            </div>
            <div className={ menuClass } >
                <ul>
                    <li>O Projekcie</li>
                    <li>Autor</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger
