// import React from 'react';

export const NotFound = () => (
  <div className="wrapper-md">
    <div className="container">
      <div className="row">
        <div className="col-md-6  align-self-center">
          <h3>Not Found!</h3>
          <p>The page you are looking for can not be found.</p>
          <button className="button not-found__action">Go Back</button>
        </div>
        <div className="col-md-6">
          <img alt="no-image" loop={-1} src={require('assets/images/amghezi.gif')}></img>
        </div>
      </div>
    </div>
  </div>
);
