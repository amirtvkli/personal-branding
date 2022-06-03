// import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => 
    <div className="logo">
        <Link to='/'>
            <object  >    
                <embed  src={require('assets/images/logo.svg')} className="logo__img"/>
            </object>
        </Link>
    </div>
