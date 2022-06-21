import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Section = styled.div`
  .image img {
    object-fit: none;
  }
  hr {
    width: 100%;
  }
  .text-style {
    text-decoration: line-through !important;
    color: ${theme.textGreyLighter} !important;
  }
`;

const PricingCard = ({ image, heading, title, subtitle, number }) => {
  return (
    <Section>
      <div className="card is-shadowless border-color">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={image} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content has-text-centered columns">
          <div className="media column">
            <h1 className="text-small has-text-blue  has-text-weight-medium">
              {heading}
            </h1>
            <hr className="has-background-grey-lighter" />
            <p className="text-base has-text-blue mb-2 px-6">{title}</p>
            <p className="text-style text-base has-text-blue mb-2 px-6">
              {subtitle}
            </p>
            <span className="tag text-medium is-large has-background-white has-text-blue has-text-weight-bold">
              {number}
            </span>
          </div>
        </div>
        <div className="buttons is-justify-content-center m-4">
          <button
            type="button"
            className="button has-text-blue has-border-radius p-4"
          >
            <p>Choose This Plans</p>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default PricingCard;
