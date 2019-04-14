import React from "react";
import { Link } from "react-router-dom";

const Logo = () => 
    <div className="__logo_canvas">
        <Link to='/'>
            <object  >    
                <embed  src={require('assets/images/logo-outline.svg')} className="__logo"/>
            </object>
        </Link>
    </div>

export default Logo;