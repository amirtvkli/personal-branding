import * as React from 'react';
import { Power2, TimelineLite} from "gsap";

declare let require:any;
export const BiographyWelcome: React.StatelessComponent<{}> = () => {

    let TweenLite = new TimelineLite({paused: true});

    let ticking = false,
    decimalX = 0,
    decimalY = 0;

    const onMouseMoveHandler = (event: any) => {
        decimalX = event.clientX / window.innerWidth - 0.5;
        decimalY = event.clientY / window.innerHeight - 0.5;
        //Request animation frame
        requestTick();
    };

    const requestTick= () => {
        //Check not already rendering
        if(!ticking) {
            console.log(ticking);
          requestAnimationFrame(update);
          //Set status
          ticking = true;
        }
    }
    function update(){
        //Animate rotations
        TweenLite.to(document.getElementById('perspective__content'), 0.2, {rotationY:-60*decimalX, rotationX:60*decimalY, ease:Power2.easeOut, transformPerspective:5000, transformOrigin:"center"});
        //Set status
        ticking = false;
    }

    return (<div    className="row justify-content-between align-items-center biography__canvas" id="perspective__container"
        onMouseMove ={ e => onMouseMoveHandler(e) }
        >
            <div className="biography__welcome" id="perspective__content" >
                <img className="biography__welcome image" src={require('assets/images/shirt.png')}></img>
                <p className="biography__welcome text">
                Welcome. My Name is Amir Tavakoli. About 7 years ago when I was working as a project planner engineer in a project, I felt that a simple application tool was required. Thus, I decided to design and develop a simple app. It motivated me to study in Ms degree and improve my programming knowledge more and more.
                Simultaneously, I experienced designing of different user Interfaces and designing lots of graphic projects. These experiences have led me to be a web front-end developer who loves UI-UX.
                </p>          
            </div>
    </div>
    )
    
}
