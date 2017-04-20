import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap';

import CardFront from '../stateless/cardFront';
import CardBack from '../stateless/cardBack';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: false,
      displaying: "front",
      displayAdditionalModal: false
    }

    this.toggleSide = this.toggleSide.bind(this);
    this.toggleAnimating = this.toggleAnimating.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    TweenMax.killAll(true);
    TweenMax.set(this.cardwrap, {css:{rotationY:0}});
    this.setState({ animating:false, displaying:"front" });
  }

  toggleSide() {
    if (this.state.animating) return;
    var newDisplay = (this.state.displaying === "front") ? "back" : "front";
    this.setState({animating:true}, () => {
      TweenMax.to(this.cardwrap, 0.8, {css:{rotationY:"+=180"}, onComplete:this.toggleAnimating, onCompleteScope:this, onCompleteParams:[false, newDisplay], ease:Power2.easeInOut});
      TweenMax.to(this.cardwrap, 0.4, {css:{z:"-=100"}, yoyo:true, repeat:1, ease:Power2.easeIn});
    })
  }

  toggleAnimating(p_bool, p_display) {
    this.setState({animating:p_bool, displaying:p_display});
  }

  render() {
    return (
      <div ref={(d) => { this.cardwrap = d }} id="card" onClick={this.toggleSide}>
        <CardFront front={this.props.cardToDisplay.front} />
        <CardBack back={this.props.cardToDisplay.back} />
      </div>
    )
  }
}

Card.PropTypes = {
  cardToDisplay: PropTypes.object.isRequired
}

export default Card;