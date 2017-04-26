import React from 'react';

export default class Clicker extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // console.log(event.target);   // <button>Click me!</button>
    console.log(event.type);        // prints 'click'
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
