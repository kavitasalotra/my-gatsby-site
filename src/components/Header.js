import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Section = styled.div`
  .navbar-link:not(.is-arrowless)::after {
    border-color: ${theme.backgroundColorBlue} !important;
  }
  a.has-text-blue:hover {
    background-color: ${theme.backgroundColorBlue} !important;
    color: #fff !important;
  }
  .navbar-dropdown a.navbar-item:hover {
    background-color:${theme.backgroundColorBlue} !important;
    color:#000; !important;
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
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start ml-auto mr-0 is-justify-content-center">
            <div className="is-flex">
              <a
                href="/"
                className="navbar-item has-text-blue is-size-6 has-text-weight-semibold pr-4"
              >
                HOME
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a
                  href=" "
                  className=" has-text-blue navbar-link  is-size-6 has-text-weight-semibold "
                >
                  PHOTOS & VIDEOS
                </a>

                <div className="navbar-dropdown">
                  <a href="/contests" className="navbar-item text-base">
                    CONTESTS
                  </a>
                  <a href=" " className="navbar-item text-base">
                    SINGLE CONTESTS
                  </a>
                </div>
              </div>

              <a
                href="/categories"
                className="navbar-item has-text-blue has-text-weight-semibold is-size-6 pr-4"
              >
                CATEGORIES
              </a>
              <Link
                to="/"
                className="navbar-item has-text-blue has-text-weight-semibold is-size-6 pr-4"
              >
                USER
              </Link>
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
