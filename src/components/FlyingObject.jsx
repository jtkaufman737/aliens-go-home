import React from 'react';
import PropTypes from 'prop-types';
import Blob from './Blob';

const FlyingObject = (props) => (
  <g>
    <Blob position={props.position}/>
  </g>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject
