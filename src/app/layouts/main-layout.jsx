// import React, { Component} from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { visitState } from '../lib';

const MainLayout = ({ children, ...rest }) => {
  const makeClass = () => {
    return visitState() === 2 ? 'main-layout main-layout--blue' : 'main-layout';
  };
  const backgroundImageSrc=require('assets/images/shadow.png');
  return (
    <div className={makeClass()} style={{ backgroundImage: `url(${backgroundImageSrc})` }}>
      <Header />
      <div className="main-layout__content">{children}</div>
      <Footer />
    </div>
  );
};

export const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};
