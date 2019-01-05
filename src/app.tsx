
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header, Canvas } from './app/components/index';



export const App: React.StatelessComponent<{}> = (props) => {
    return (
        <div>
            {/* <Header/> */}
            <Canvas/>
        </div>
    );
}



//ReactDOM.render(<Canvas/>, document.getElementById('canvas'));
//import { Footer } from "./app/components/footer";
// import { Hello } from "./app/components/hello";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />, document.getElementById("example")
// );


// const address = {
//     city: 'London',
//     street: 'East London works, 75 Whitechapel Road LondonE11DU'
// };

// function greeting(address:any):string{
//     if (address)
//     return `${address.city} ${address.street}`;
//     return `New User`;
// };

// const element = (
//     <div>
//         <h1>oeui</h1>
//         <p>my name is </p>
//          {/* <img src={logo}/> */}
//     </div>
// );
    
    
//ReactDOM.render(element, document.getElementById('footer'));
