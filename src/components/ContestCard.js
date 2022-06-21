import React from 'react';

const ContestCard = ({ image, title, subtitle, title1, subtitle1 }) => {
  return (
    <div className="card is-shadowless">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="cardimage" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media columns">
          <div className="media-left column is-6 ">
            <div>
              <h1 className="is-size-6 has-text-black has-text-weight-medium">
                {title}
              </h1>
              <p className="text-base has-text-grey-light ">{subtitle}</p>
            </div>
          </div>
          <div className="media-left column is-6 ">
            <div>
              <h1 className="is-size-6 has-text-black has-text-weight-medium">
                {title1}
              </h1>
              <p className="text-base has-text-grey-light">{subtitle1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContestCard;
