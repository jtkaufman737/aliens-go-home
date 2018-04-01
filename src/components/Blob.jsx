import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const Blob = (props) => {
  const style={
    fill: '#b6b6b6',
    stroke:'#7d7d7d',
  };

  return (
    <path
      style={style}
      circle cx="100" cy="100" r="100"
      />
  );
}

Blob.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Blob;
