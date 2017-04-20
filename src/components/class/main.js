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
    let card = this.state.cards.find((ele, idx) => {
      return ele.id === cardId;
    })
    this.setState({ displayedCard: card });
  }

  goBack() {
    if (!this.state.displayedCard) return null;
    let curCardIdx = this.state.cards.findIndex((ele, idx) => {
      return ele.id === this.state.displayedCard.id;
    });
    let newIdx = (curCardIdx === 0) ? this.state.cards.length - 1 : curCardIdx - 1;
    let newCard = { ...this.state.cards[newIdx] };
    this.setState({ displayedCard: newCard });
  }

  goNext() {
    if (!this.state.displayedCard) return null;
    let curCardIdx = this.state.cards.findIndex((ele, idx) => {
      return ele.id === this.state.displayedCard.id;
    });
    let newIdx = (curCardIdx === this.state.cards.length -1) ? 0 : curCardIdx + 1;
    let newCard = { ...this.state.cards[newIdx] };
    this.setState({ displayedCard: newCard });
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