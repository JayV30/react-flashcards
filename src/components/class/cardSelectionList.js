import React, { Component, PropTypes } from 'react';

import CardListItem from './cardListItem';

class CardSelectionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="card-list">
        {this.props.cards.map((card, idx) => {
          return <CardListItem key={"card-list-item-" + idx} card={card} handleCardSelect={this.props.handleCardSelect} />
        })}
      </div>
    )
  }
}

CardSelectionList.PropTypes = {
  cards: PropTypes.array.isRequired,
  handleCardSelect: PropTypes.func.isRequired
}

export default CardSelectionList;