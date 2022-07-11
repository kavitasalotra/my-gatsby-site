import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .hovered:hover .info {
    top: 15px;
    opacity: 1;
  }
  .info {
    border-radius: 10px;
    font-weight: 500;
    position: absolute;
    left: 15px;
    top: -60px;
    opacity: 0;
    transition: all 0.3s;
  }
`;
const Card = ({
  title,
  image,
  number,
  subtitle,
  cardimage,
  button,
  category,
}) => {
  return (
    <Wrapper className="card is-shadowless border-color">
      <div className="p-3">
        <div className="card-content">
          <div className="media">
            <div className="media-left has-text-centered">
              <figure className="has-background-grey-lighter image is-48x48">
                <img src={image} alt="cardimage" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title text-small is-size-6-mobile ">{title}</p>
              <span className="tag is-light subtitle text-base has-text-blue mb-0">
                {number}
              </span>
              <span className="has-text-grey-light ml-2">{subtitle}</span>
            </div>
          </div>
        </div>
        <div className="card-image p-4">
          <figure className="image is-5by3 is-relative hovered">
            <img src={cardimage} alt="cardimage" className="border-color " />
            {/* <div className="overlay-effect"> */}
            <div className="info">
              <span className=" has-text-blue text-base has-background-white mr-2 has-text-weight-semibold p-2 border-color">
                {category}
              </span>
            </div>
            {/* </div> */}
          </figure>
        </div>
        {/* <div className="buttons is-justify-content-center">
          <button
            type="button"
            className="button has-text-blue has-border-radius"
          >
            {button}
          </button>
        </div> */}
        <div className="buttons is-justify-content-center my-3">
          <button
            type="button"
            className="button has-text-blue has-border-radius border-color p-3 "
          >
            <p className="is-size-6">{button}</p>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Card;
