// import React from 'react';
import { Logo } from './logo';
import { ToggleMenu } from './toggle-menu';

export const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <div className="spacer" />
      <ToggleMenu />
    </div>
  );
};
