import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="blob-battle-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle}/>
      <CannonBase />
    </svg>
  );
};

Canvas.propTypes = {
  angle:PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
}

export default Canvas;
