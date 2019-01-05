import * as React from "react";
declare var require: any;
import { Logo } from './logo';

export const Canvas: React.StatelessComponent<{}> = () => {
    return (

        <div className="__canvas">
            <div className="row justify-content-between align-items-center __section __top">
                <Logo/>
                <button title="Open Menu" className="navigation__button">
                    <span className="navigation__button__icon"></span>
                    <span className="navigation__button__text">
                    Menu
                    </span>
                </button>
            </div>
            <div className="row justify-content-between align-items-center __section __bottom">
                    <nav className="col-12 col-sm-auto __social_links"> 
                        <a title="Github" className="icon icon-github" href="http://github.com/amirtvkli" target='_blank'></a>
                        <a title="Linkedin" className="icon icon-linkedin" href="http://linkedin.com/in/amirtvkli" target='_blank'></a>
                        <a title="Twitter" className="icon icon-twitter" href="http://twitter.com/amirtvkli" target='_blank'></a>
                        <a title="Behance" className="icon icon-behance" href="https://behance.net/amirtvkli" target='_blank'></a>
                        {/* <a className="icon icon-instagram" href="http://instagram.com/amirtvkl" target='_blank'></a> */}
                    </nav>
                    <div className="col-12 col-sm-auto justify-content-end __copyright">
                        <span>Design and developed by <a title="Studio Vista" href="http://studiovista.ir">Studio Vista</a> @ 2018. All rights reserved.</span>
                    </div>
            </div>
        </div>
    );
};