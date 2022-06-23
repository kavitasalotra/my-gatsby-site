import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FeatureItem from './FeatureItem';

const Wrapper = styled.div`
  .column.is-1 {
    display: flex;
    align-items: center;
    .column.is-10 {
      display: flex;
      align-items: center;
    }
  }
`;

const data = [
  {
    id: 1,
    image: '/images/featured-01.jpg',
    title: 'Walk In The Nature',
    rating: 4.5,
    winnerName: 'Vincent Adam',
    contestAuthorName: 'Anthony Soft',
    awards: '1.000 + Camera Nikon',
  },
  {
    id: 2,
    image: '/images/featured-02.jpg',
    title: 'Run In The Nature',
    rating: 4.5,
    winnerName: 'Thomas Eddy ',
    contestAuthorName: 'Anthony Soft',
    awards: ' 4,400 + Canon EOS R5',
  },
  {
    id: 3,
    image: '/images/featured-03.jpg',
    title: 'Fly In The Nature',
    rating: 4.5,
    winnerName: 'Vincent Adam',
    contestAuthorName: 'Anthony Soft',
    awards: '5,500 + Canon EOS R3',
  },
  {
    id: 4,
    image: '/images/featured-02.jpg',
    title: 'Stay In The Nature',
    rating: 4.5,
    winnerName: 'Vincent Adam',
    contestAuthorName: 'Anthony Soft',
    awards: '5,500 + Canon EOS R3',
  },
  {
    id: 5,
    image: '/images/featured-03.jpg',
    title: 'Shoot In The Nature',
    rating: 4.5,
    winnerName: 'Vincent Adam',
    contestAuthorName: 'Anthony Soft',
    awards: '5,500 + Canon EOS R3',
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
              <FeatureItem key={item.id} item={item} />
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
