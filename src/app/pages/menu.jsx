// import React from 'react';
import { Link } from 'react-router-dom';
import { SocialLinks } from '../layouts/components/social-links';
const onClose = () => {
  localStorage.setItem('visitState', 'menuVisit');
  setTimeout(() => {
    localStorage.setItem('visitState', 'secondVisit');
  }, 2000);
};
export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="at-menu">
        <button className="at-menu__toggle toggle__menu">
          <span className="toggle__menu__icon __close"></span>
          <Link
            title="Close Menu"
            className="nav-link toggle__menu__txt __close"
            to="/"
            onClick={onClose}
          >
            Close
          </Link>
        </button>
        <div className="container at-menu__contents">
          <div className="row at-menu__contents__header">
            <h2>Menu</h2>
          </div>
          <nav className="row justify-content-between">
            <div className="col-sm-5 col-xs-12">
              <div className="row">
                <h5 className="at-menu__contents__title">Me in 10 seconds?</h5>
                <p>
                  I'm product manager & team leader with 7+ years of experience in software development and helping tech companies grow and deliver outstanding mobile and web applications.
                 I enjoy working through data, information, scenarios, and numbers to create impactful digital products.
                </p>
              </div>
              <div className="row">
                <h5 className="at-menu__contents__title">Me in 10 Minutes?</h5>

                <p>
                  Visit
                  <a
                    className="at-menu__contents__link"
                    href="https://www.linkedin.com/in/amirtvkli/"
                    target="_blank"
                  >
                    my profile
                  </a>
                  on Linkedin.
                </p>
              </div>
              <div className="row">
                <h5 className="at-menu__contents__title">My artworks?</h5>
                <p>
                  Visit
                  <a
                    className="at-menu__contents__link"
                    href="https://www.behance.net/amirtvkli"
                    target="_blank"
                  >
                    my artworks
                  </a>
                  on Behance.
                </p>
              </div>
              <div className="row">
                <h5 className="at-menu__contents__title">My projects?</h5>
                Visit
                <a
                  className="at-menu__contents__link"
                  href="https://github.com/amirtvkli"
                  target="_blank"
                >
                  my projects
                </a>
                on Github.
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="row">
                <h5 className="at-menu__contents__title">My Images?</h5>
                Visit
                <a
                  className="at-menu__contents__link"
                  href="https://www.pexels.com/@amir-tavakoli-692703"
                  target="_blank"
                >
                  my photos
                </a>
                on Pexels.
              </div>
              <div className="row">
                <h5 className="at-menu__contents__title">My Books?</h5>
                <p>
                  I haven't published yet, but I would like to write. I wish one
                  day in near future I will do that. If you read a lot I highly
                  recommend you to have a
                  <a
                    className="at-menu__contents__link"
                    href="https://www.goodreads.com/user/show/87806274-amir-tavakoli"
                    target="_blank"
                  >
                    goodreads
                  </a>
                  account.
                </p>
              </div>
              <div className="row">
                <h5 className="at-menu__contents__title">
                  Contact me? Questions? Thoughts?
                </h5>
                <p>
                  Feel free to
                  <a
                    className="at-menu__contents__link"
                    href="mailto: amirtavakoli@outlook.com"
                  >
                    send me an Email.
                  </a>
                  I enjoy meeting new people and hearing new perspectives. Reach
                  out if you want to talk to me, I would love to get in touch.
                </p>
              </div>
              <div className="row">
                <h5 className="at-menu__contents__title">Elsewhere?</h5>
                <SocialLinks></SocialLinks>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
