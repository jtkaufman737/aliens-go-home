import React from 'react';

const Sky = () => {
  const skyStyle = {
    fill:'#30abef',
  };
  const skyWidth = 5000;
  const gameHeight = 1200;
  return(
    <react
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
    />
  );
};

export default Sky;
