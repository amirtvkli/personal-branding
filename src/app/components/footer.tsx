import * as React from "react";
declare var require: any;

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1>footer</h1> 
                <img src={require('assets/images/logo.png')}/>
            </div>
            );
        }
    }