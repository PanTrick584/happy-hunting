import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css'

const Menu = (  ) => {

    return(
        <div className="menu">
            <ul className="menu-ul">
                <Link to="/">
                    <li className="menu-ul-li" >Początek</li>
                </Link>
                <Link to="/o-autorze">
                    <li className="menu-ul-li" >AUTOR</li>
                </Link>
                <li className="menu-ul-li" >O PROJEKCIE</li>
                <Link to="/kontakt">
                    <li className="menu-ul-li" >KONTAKT</li>
                </Link>
                <Link to="/projekt">
                    <li className="menu-ul-header"></li>
                </Link>
            </ul>
        </div>
    )
}

export default  Menu