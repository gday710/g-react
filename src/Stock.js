import React, { Component } from 'react';
import './Stock.css';

class Stock extends Component {
  constructor(props) {
    super();
    this.state = {price: parseInt(props.price)};
  }

  more() {
    //this.state.price++;
    this.setState({price:this.state.price+1}, () => {
      if (this.state.price === 430) {
        alert("too much sauce");
      }
    });

  }

  less() {
    //this.state.price++;
    this.setState({price:this.state.price-1}, () => {
      if (this.state.price === 300) {
        alert("not enough sauce");
      }
    });

  }

  render() {
    // const name = this.props.name;
    // const ticker = this.props.ticker;
    // const price = this.props.price;
    const {name, ticker} = this.props;
    const price = this.state.price;

    return (
      <div className="Stock" >
        <p>
          Stock: {name}
        </p>
        <p>
          Ticker: {ticker}
        </p>
        <p>
          Price: ${price}
        </p>
        <p>
          <button type="button" onClick={this.more.bind(this)}>increment</button>
          <button type="button" onClick={this.less.bind(this)}>decrement</button>
        </p>
      </div>
    );
  }
}
export default Stock;
