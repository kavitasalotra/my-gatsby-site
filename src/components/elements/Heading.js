import * as React from 'react';

const Heading = ({ text, children }) => {
  return (
    <Container>
      <p className="has-text-grey-lighter text-base text-style ">
        {text || children}
      </p>
    </Container>
  );
};

export default Heading;
