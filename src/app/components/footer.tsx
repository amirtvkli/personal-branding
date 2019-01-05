import * as React from "react";
declare var require: any;
let logo = require('assets/images/logo.png');



export class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1>oei</h1>
                <p>my name is </p> 
                 <img src={logo}/>
            </div>
        ) ;
    }
}