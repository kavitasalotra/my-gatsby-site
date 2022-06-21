import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .background-transparent {
    background: transparent !important;
  }
  .border-radius-md {
    border-radius: 15px;none
  }
  .button:hover {
    color: ${(props) => props.theme.mainBrandColor} !important;
    background-color: #fff !important;
  }
  hr {
    width: 70%;
  }
`;

const HomeHero = () => {
  return (
    <Container>
      <section className="hero is-large has-background-image has-text-centered">
        <div className="hero-body">
          none
          <div className="columns">
            <div className="column">
              <p className="title  text-large has-text-white">
                Enter a world of Photos
                <p className="title text-large has-text-blue m-0">
                  & Amazing Awards
                </p>
              </p>
              <div className="is-flex is-justify-content-center is-align-item-center">
                <hr />
              </div>
              <p className="has-text-white text-base m-1">
                SnapX Photography is a professional website template with 5
                different HTML pages for maximum customizations. It
              </p>
              <p className="has-text-white text-base">
                is free for commercial usage. This Bootstrap v5.1.3 CSS layout
                is provided by TemplateMo Free CSS Templates.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="button text-small is-outlined has-text-white py-4 px-6 is-responsive background-transparent"
          >
            Explore SnapX Contest
          </button>
        </div>
      </section>
    </Container>
  );
};

export default HomeHero;
