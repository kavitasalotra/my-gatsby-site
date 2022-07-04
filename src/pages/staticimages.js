import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const staticImage = () => {
  return (
    <div>
      <StaticImage
        src="../../static/images/closed-bg.jpg"
        alt="featuredimage"
        width={1000}
        height={500}
      />
    </div>

  );
};

export default staticImage;
