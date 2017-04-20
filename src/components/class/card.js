import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardFront from '../stateless/cardFront';
import CardBack from '../stateless/cardBack';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "front",
      displayAdditionalModal: false
    }

    this.toggleSide = this.toggleSide.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ side: "front" });
  }

  toggleSide() {
    let side = (this.state.side === "front") ? "back" : "front";
    this.setState({ side: side });
  }

  render() {
    let cardSide = (this.state.side === "front") ? <CardFront front={this.props.cardToDisplay.front} /> : <CardBack back={this.props.cardToDisplay.back} />;

    return (
      <div id="card" onClick={this.toggleSide}>
        {cardSide}
      </div>
    )
  }
}

Card.PropTypes = {
  cardToDisplay: PropTypes.object.isRequired
}

export default Card;