
import 'normalize.css';
import 'styles/_app.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Footer } from "./app/components/footer";
// import { Hello } from "./app/components/hello";

// ReactDOM.render(
    //     <Hello compiler="TypeScript" framework="React" />, document.getElementById("example")
    // );
    
ReactDOM.render(<Footer/>, document.getElementById('footer'));