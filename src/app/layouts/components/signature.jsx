// import React from 'react';
import { visitState } from '../../lib';
export class Signature extends React.Component {
  constructor(props) {
    super(props);
    this.bird = null;
    this.myTween = null;
    this.quotes = [
      {
        wirter: 'George Bernard Shaw',
        text:
          "Life isn't about finding yourself. Life is about creating yourself.",
      },
      {
        wirter: 'Amir Tavakoli',
        text: "I'm honor of having such a loyal friend like you!",
      },
      {
        wirter: 'Nishan Panwar',
        text: "The world is full of nice people. If you can't find one, be one",
      },
      {
        wirter: 'Steve Jobs',
        text:
          "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
      },
    ];
  }
  componentDidMount() {
    if (visitState() === 2) {
      this.myTween = TweenLite.to(this.bird, 1, {
        left: '-22px',
        opacity: 1,
      });
    }
  }
  render() {
    return (
      <div className="at-signature">
        <img
          className="at-welcome__bird"
          src={require('assets/images/bird.png')}
          ref={(img) => (this.bird = img)}
        ></img>
        {this.quotes && this.quotes.length && (
          <>
            <q className="at-signature__quote">
              {this.quotes[visitState()].text}
            </q>
            <span className="at-signature__wirter">
              <b> __ {this.quotes[visitState()].wirter}</b>
            </span>
          </>
        )}
      </div>
    );
  }
}
