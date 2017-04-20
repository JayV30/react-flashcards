import React from 'react';
import PropTypes from 'prop-types';

const CardFront = (props) => {
  let subtitle = props.front.subtitle ? <h3>{props.front.subtitle}</h3> : null;
  return (
    <div className="card-front-wrapper">
      <h1>{props.front.title}</h1>
      {subtitle}
    </div>
  )
}

// validation of props
CardFront.propTypes = {
  front: PropTypes.object.isRequired
}

export default CardFront;