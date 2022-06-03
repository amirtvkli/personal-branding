// import React from 'react';
import { Link } from 'react-router-dom';

export const ToggleMenu = () => {
  return (
    <button title="Open Menu" className="toggle__menu">
      <span className="toggle__menu__icon"></span>
      <span className="toggle__menu__txt">
        <Link className="nav-link" to="/menu">
          Menu
        </Link>
      </span>
    </button>
  );
};
