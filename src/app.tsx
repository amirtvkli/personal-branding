
import 'normalize.css';
import 'styles/_app.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";


import { Hello } from "./views/components/hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);