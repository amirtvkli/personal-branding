import * as React from 'react';
import { Link } from 'react-router-dom';
export const Menu: React.StatelessComponent<{}> = () => {
    return (
        <div className="menu__page">
            <div className="menu__page toggle__menu">
                <button className="toggle__menu">
                    <span className="toggle__menu__icon __close"></span>
                    <span className="toggle__menu__text __close">
                        <Link title="Close Menu" className="nav-link" to="/">Close</Link>
                    </span>
                </button>
            </div>
            <div className="row menu__page contents"> 
                <nav className="navbar navbar-expand-lg ">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-items">
                            <Link className="nav-link" to="/about">About</Link>
                        </li> 
                        <div className="dash">_______</div>
                        <li className="nav-items">
                            <Link className="nav-link" to="/folio">Folio</Link>
                        </li> 
                        <div className="dash">_______</div>
                        <li className="nav-items">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>    
                    </ul>                
                </nav>
            </div>
        </div>
    )
}