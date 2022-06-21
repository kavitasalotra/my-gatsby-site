import * as React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .navbar-link:not(.is-arrowless)::after {
    border-color: #fff;
  }
`;

const Header = () => {
  return (
    <Section className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src="images/logo.png" alt="logo.png" />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />r
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start ml-auto">
            <div className="has-background-blue is-flex">
              <a href="/" className="navbar-item has-text-white text-base ">
                HOME
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a href=" " className="navbar-link has-text-white text-base">
                  PHOTOS & VIDEOS
                </a>

                <div className="navbar-dropdown">
                  <a href=" " className="navbar-item text-base">
                    CONTESTS
                  </a>
                  <a href=" " className="navbar-item text-base">
                    SINGLE CONTESTS
                  </a>
                </div>
              </div>

              <a href="/" className="navbar-item has-text-white text-base">
                CATEGORIES
              </a>
              <a href="/" className="navbar-item has-text-white text-base">
                USER
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  type="button"
                  className="button has-text-blue has-border-radius p-4"
                >
                  <span className="icon is-small">
                    <i className="fas fa-user" />
                  </span>
                  <p>Sign In/Up</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
