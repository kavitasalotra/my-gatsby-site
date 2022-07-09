import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const staticImage = () => {
  return (
    <div>
      <StaticImage
        src="../../static/images/images.png"
        alt="featuredimage"
        width={1000}
        height={500}
      />png
    </div>
  );
};

export default staticImage;
