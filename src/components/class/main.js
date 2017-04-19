import React, { Component } from 'react';
import axios from 'axios';

import CardSelectionList from './cardSelectionList';
import Card from './card';
import NavWidget from '../stateless/navWidget';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      displayedCard: null
    }

    this.handleCardSelect = this.handleCardSelect.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goMenu = this.goMenu.bind(this);
  }

  componentWillMount() {
    // get some card data via ajax
    axios.get('data/cards.json').then((res) => {
      console.log("Main componentWillMount retreived this data from cards.json:", res.data);
      this.setState({ cards: res.data.cards });
    });
  }

  handleCardSelect(cardId) {
    this.setState({ displayedCard: cardId });
  }

  goBack() {

  }

  goNext() {

  }

  goMenu() {
    this.setState({ displayedCard: null });
  }

  render() {
    let innerContent = <CardSelectionList cards={this.state.cards} handleCardSelect={this.handleCardSelect} />
    if (this.state.displayedCard) innerContent = <Card cardToDisplay={this.state.displayedCard} />

    return (
      <div className="centering-wrap">
        {innerContent}
        <NavWidget goBack={this.goBack} goNext={this.goNext} goMenu={this.goMenu} />
      </div>
    )
  }
}

export default Main;