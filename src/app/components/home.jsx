import React from 'react';

const Home = () => 
    <div className="row justify-content-between align-items-center biography__canvas">
        <div className="row justify-content-between align-items-center biography__canvas" id="perspective__container">
            <div className="biography__welcome" id="perspective__content" >
                <img className="biography__welcome image" src={require('assets/images/shirt.png')}></img>
                <p className="biography__welcome text">
                Welcome. My Name is Amir Tavakoli. About 7 years ago when I was working as a project planner engineer in a project, I felt that a simple application tool was required. Thus, I decided to design and develop a simple app. It motivated me to study in Ms degree and improve my programming knowledge more and more.
                Simultaneously, I experienced designing of different user Interfaces and designing lots of graphic projects. These experiences have led me to be a web front-end developer who loves UI-UX.
                </p>          
            </div>
        </div>
    </div>

export default Home;