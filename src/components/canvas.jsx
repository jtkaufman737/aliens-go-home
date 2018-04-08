import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
// import Blob from './Blob';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './startGame';


const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="blob-battle-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
     <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2"/>
        </filter>
      </defs>
      <Sky />
      <FlyingObject position={{x: -150, y: -300}}/>
      <FlyingObject position={{x: 150, y: -300}}/>
      <Ground />
      <Heart position={{x: -300, y: 35}} />
      <CannonPipe rotation={props.angle}/>
      <CannonBase />
      <CannonBall position={{x: 0, y:-100}}/>
      <CurrentScore score={15}/>
      <StartGame onClick={() => console.log('Aliens, Go Home!')} />
    </svg>
  );
};

Canvas.propTypes = {
  angle:PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
}

export default Canvas;
