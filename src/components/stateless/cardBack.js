import React from 'react';
import PropTypes from 'prop-types';

const CardBack = (props) => {
  
  return (
    <div className="card-back-wrapper">
      <h1>{props.back.title}</h1>
      <p>{props.back.text}</p>
    </div>
  )
}

// validation of props
CardBack.propTypes = {
  back: PropTypes.object.isRequired
}

export default CardBack;