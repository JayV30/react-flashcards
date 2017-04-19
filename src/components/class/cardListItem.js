import React, { Component, PropTypes } from 'react';


class CardListItem extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.props.handleCardSelect(this.props.card.id);
  }

  render() {
    return (
      <div className="card-list-item" onClick={this.handleSelect}>
        <p>{this.props.card.front.title}</p>
      </div>
    )
  }
}

CardListItem.PropTypes = {
  card: PropTypes.object.isRequired,
  handleCardSelect: PropTypes.func.isRequired
}

export default CardListItem;