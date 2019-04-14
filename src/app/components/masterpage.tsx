import * as React from "react";
declare var require: any;
import { Logo, BiographyWelcome } from './index';
import { Link } from 'react-router-dom';
import Folio from "./folio";

const MasterPage: React.StatelessComponent<{}> = () => {
    return (

        <div className="__canvas">
            <div className="row justify-content-between align-items-center __section __top">
                <Logo/>
                <button  title="Open Menu" className="toggle__menu">
                    <span className="toggle__menu__icon"></span>
                    <span className="toggle__menu__text">
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </span>
                </button>
            </div>
        
            <div className="row justify-content-between align-items-center __section __bottom">
                    <nav className="col-12 col-sm-auto __social_links"> 
                        <a title="Github" className="icon icon-github" href="http://github.com/amirtvkli" target='_blank'></a>
                        <a title="Linkedin" className="icon icon-linkedin" href="http://linkedin.com/in/amirtvkli" target='_blank'></a>
                        <a title="Twitter" className="icon icon-twitter" href="http://twitter.com/amirtvkli" target='_blank'></a>
                        <a title="Behance" className="icon icon-behance" href="https://behance.net/amirtvkli" target='_blank'></a>
                        <a title="Goodreads" className="icon icon-goodreads" href="https://goodreads.com/amirtvkli" target='_blank'></a>
                        {/* <a className="icon icon-instagram" href="http://instagram.com/amirtvkl" target='_blank'></a> */}
                    </nav>
                    <div className="col-12 col-sm-auto justify-content-end __copyright">
                        <span>2018-2019 @ 0.1.7</span>
                    </div>
            </div>
        </div>
    );
};

export default MasterPage;