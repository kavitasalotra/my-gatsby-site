import * as React from 'react';

const Button = ({ text, children }) => {
  return <button className="button">{text || children}</button>
  };

export default Button;
