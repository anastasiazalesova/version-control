import React, {Component} from 'react';

export default class Card extends Component {


  render() {
    const { card, children } = this.props;
    return (
      <div className="Card">
        <div>
          <h2 className="Card-Title">{card.title}</h2>
          <div className="Card-Content">{card.content}</div>
        </div>
        <div className="Card-Actions">
          {children}
        </div>
      </div>
    );
  }
}
