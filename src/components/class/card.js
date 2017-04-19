import React, { Component, PropTypes } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Card!</div>
  }
}

Card.PropTypes = {
  cardToDisplay: PropTypes.object.isRequired
}

export default Card;