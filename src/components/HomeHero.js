import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  .background-transparent {
    background: transparent !important;
  }
  .border-radius-md {
    border-radius: 15px;
  }
  .button:hover {
    color: ${(props) => props.theme.mainBrandColor} !important;
    background-color: #fff !important;
  }
  hr {
    width: 70%;
  }
`;

const HomeHero = ({ title, title1, subtitle, subtitle1, button }) => {
  return (
    <Container>
      <section className="hero is-large has-background-image has-text-centered">
        <div className="hero-body">
          <div className="columns">
            <div className="column">
              <h1 className="title  text-large has-text-white is-size-5-mobile">
                {title}
                <h1 className="title text-large has-text-blue m-0  is-size-5-mobile">
                  {title1}
                </h1>
              </h1>
              <div className="is-flex is-justify-content-center is-align-item-center  ">
                <hr />
              </div>
              <p className="has-text-white text-base m-1  is-size-7-mobile">
                {subtitle}
              </p>
              <p className="has-text-white text-base is-size-7-mobile">
                {subtitle1}
              </p>
            </div>
          </div>
          <Link
            to="/contests"
            type="button"
            className="button text-small is-outlined has-text-white py-4 px-6 is-responsive background-transparent"
          >
            {button}
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default HomeHero;
