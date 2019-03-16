import * as React from 'react';
import { BiographyWelcome} from './index';
import { Component } from 'react';


class Home extends Component{
    
    constructor(props?: any, context?: any){
        super(props,context);
    }

    componentDidMount(){
       
    }
    
    render(){   
        return (
            <div className="row justify-content-between align-items-center biography__canvas">
                <BiographyWelcome/>
            </div>
        )
    }
}

export default Home;