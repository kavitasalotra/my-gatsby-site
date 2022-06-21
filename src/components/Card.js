import React from 'react';

const Card = ({ title, image, number, subtitle, cardimage, button }) => {
  return (
    <div className="card is-shadowless border-color">
      <div className="p-3">
        <div className="card-content">
          <div className="media">
            <div className="media-left has-text-centered">
              <figure className="has-background-grey-lighter image is-48x48">
                <img src={image} alt="cardimage" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title text-small ">{title}</p>
              <span className="tag is-light subtitle text-base has-text-blue mb-0">
                {number}
              </span>
              <span className="has-text-grey-light ml-2">{subtitle}</span>
            </div>
          </div>
        </div>
        <div className="card-image p-4">
          <figure className="image is-5by3 ">
            <img src={cardimage} alt="cardimage" className="border-color" />
          </figure>
        </div>
        <div className="buttons is-justify-content-center">
          <button
            type="button"
            className="button has-text-blue has-border-radius p-4"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
