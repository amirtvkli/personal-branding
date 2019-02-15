
import * as React from "react";
import {Component} from "react";
import * as ReactDOM from "react-dom";
import { Header, MasterPage } from './app/components/index';

export const App: React.StatelessComponent<{}> = (props) => {
    return (
        <div>
            <Header/>
        </div>
    );
}