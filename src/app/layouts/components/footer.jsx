// import React from 'react';
import { SocialLinks } from './social-links';
import { Signature } from './signature';


export const Footer = () => {
  return (
    <div className="at-footer">
      <Signature />
      <span className="at-footer__spacer"></span>
      <span className="at-footer-social-links">
        <SocialLinks />
      </span>
    </div>
  );
};
