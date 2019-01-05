import * as React from 'react';
import { Link } from 'react-router-dom';
export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg ">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-items">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>    
                    <li className="nav-items">
                        <Link className="nav-link" to="/members">Members</Link>
                    </li>    
                </ul>                
            </nav>
        </div>
    )
}