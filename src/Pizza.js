import React, { Component } from 'react';

class Pizza extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const name = this.props.name;
    const size = this.props.size;
    return (
      <div>🍕 Pizza: {name} Size: {size} 🍕</div>
    );
  }
}
export default Pizza;
