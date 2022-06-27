import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import Image from '../../static/images/closed-02.jpg';

const Test = () => {
  return (
    <div>
      <p>hello</p>
      <StaticImage src="/images/pricing-03.jpg " alt="popular-image" />
    </div>
  );
};

export default Test;
