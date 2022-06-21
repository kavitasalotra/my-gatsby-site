import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Wrapper = styled.div`
  .column.is-1 {
    display: flex;
    align-items: center;
    .column.is-10 {
      display: flex;
      align-items: center;
    }
  }
  .overlay {
    background-color: rgba(250, 250, 250, 0.92);
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    transition: all 0.3s;
  }
  .images:hover .overlay {
    height: 100%;
  }
  .info {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0px 15px;
  }
`;

const data = [
  {
    id: 1,
    image: '/images/featured-01.jpg',
  },
  {
    id: 2,
    image: '/images/featured-02.jpg',
  },
  {
    id: 3,
    image: '/images/featured-03.jpg',
  },
  {
    id: 4,
    image: '/images/featured-02.jpg',
  },
  {
    id: 5,
    image: '/images/featured-03.jpg',
  },
];

const FeaturedItems = () => {
  const [number, setNumber] = useState(0);
  console.log(number, 'number');
  const sliderRef = useRef();
  const goNext = () => {
    sliderRef?.current?.slickNext();
  };

  const goPrev = () => {
    sliderRef?.current?.slickPrev();
  };
  const beforeChange = (prev, next) => {
    setNumber(Math.floor(next));
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper className="section">
      <div className="columns">
        <div className="column is-1">
          <div className="is-hidden-mobile">
            <button
              type="button"
              className="button button-is-primary has-text-white"
              onClick={goPrev}
            >
              <i className="fas fa-angle-left" />
            </button>
          </div>
        </div>
        <div className="column is-10">
          <Slider {...settings} ref={sliderRef}>
            {data.map((item) => (
              <div key={item.id} className="px-3">
                <img
                  src={item.image}
                  className="border-color is-relative images"
                  alt="featured"
                />
                <div className="content overlay">
                  <div className="info">
                    <div>
                      <h1 className="text-base has-text-blue">
                        Walk In Nature
                      </h1>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <spans className="tag">(4.5)</spans>
                    </div>
                    <div className="list">
                      <ul>
                        <li>
                          <span className="text-base has-text-weight-semibold">
                            Contest Winner:
                          </span>
                          Vincent Adam
                        </li>
                        <li>
                          <span className="text-base has-text-weight-semibold">
                            Contest Author:
                          </span>
                          Anthony Soft
                        </li>
                        <li>
                          <span className="text-base has-text-weight-semibold">
                            Awards:
                          </span>
                          $8,400 + Canon EOS R1
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="column is-1">
          <div className="is-hidden-mobile">
            <button
              type="button"
              className="button button-is-primary has-text-white"
              onClick={goNext}
            >
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default FeaturedItems;
