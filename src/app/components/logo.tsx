import * as React from "react";
import { Link } from "react-router-dom";
declare var require: any;

export const Logo: React.StatelessComponent<{}> = () => {
    return (
        <div className="__logo_canvas">
            <Link to='/home'>
                <object>    
                    <embed src={require('assets/images/logo-outline.svg')} className="__logo"/>
                </object>
            </Link>
        </div>
    );
};