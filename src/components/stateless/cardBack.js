import React from 'react';
import PropTypes from 'prop-types';

const CardBack = (props) => {
  var img = null;
  if (props.back.imgUrl) img = <img src={props.back.imgUrl} alt={props.back.imgAltText} />

  return (
    <div className="card-back-wrapper">
      <h1>{props.back.title}</h1>
      <p>{props.back.text}</p>
      {img}
    </div>
  )
}

// validation of props
CardBack.propTypes = {
  back: PropTypes.object.isRequired
}

export default CardBack;