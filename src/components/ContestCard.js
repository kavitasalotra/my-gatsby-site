import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .card-image:hover .info {
    top: 15px;
    opacity: 1;
  }
  .info {
    position: absolute;
    left: 15px;
    top: -60px;
    opacity: 0;
    transition: all 0.3s;
  }
  em {
    font-style: normal;
  }
`;

const ContestCard = ({ image, title, subtitle, title1, subtitle1, winner }) => {
  return (
    <Wrapper className="card is-shadowless ">
      <div className="card-image is-relative">
        <figure className="image is-4by3">
          <img src={image} alt="cardimage" />
          <div className="info">
            <span className=" has-text-blue text-base has-background-white mr-2 has-text-weight-semibold 	 p-2 border-color">
              <em className="has-text-grey">Winner:</em>
              {winner}
            </span>
          </div>
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
    </Wrapper>
  );
};
export default ContestCard;
