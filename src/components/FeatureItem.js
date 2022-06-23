import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  :hover .overlay {
    height: 100%;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(250, 250, 250, 0.92);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.3s ease;
    border-radius: 10px;
  }
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    width: max-content;
  }
`;
const FeatureItem = ({ item }) => {
  return (
    <Wrapper className="px-3">
      <img
        src={item.image}
        className="border-color is-relative images"
        alt="featured"
      />
      <div className="content overlay has-text-centered">
        <div className="info my-5">
          <h1 className="is-size-6 has-text-blue">{item.title}</h1>
          <i className="fa-solid fa-star has-text-blue" />
          <i className="fa-solid fa-star has-text-blue" />
          <i className="fa-solid fa-star has-text-blue" />
          <span className="is-size-7">({item.rating})</span>

          <div className="list">
            <ul className="mt-1 mb-5">
              <li className="is-size-6 has-text-weight-semibold">
                Contest Winner:
                <span className="is-size-7 has-text-weight-normal">
                  {item.winnerName}
                </span>
              </li>
              <li className="is-size-6 has-text-weight-semibold">
                Contest Author:
                <span className="is-size-7 has-text-weight-normal">
                  {item.contestAuthorName}
                </span>
              </li>
              <li className="is-size-6 has-text-weight-semibold">
                Awards:
                <span className="is-size-7 has-text-weight-normal">
                  ${item.awards}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeatureItem;
