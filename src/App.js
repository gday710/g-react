import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pizza from './Pizza.js';
import Stock from './Stock.js';

class App extends Component {
  constructor() {
    super();
    this.state = {pizza:[], Stocks:[]};
  }

  async getPizza() {
    const response = await fetch('http://localhost:3001');
    const pizza = await response.json();
    this.setState({pizza: pizza});
  }

  componentDidMount() {
    this.getPizza();
  }

  sayHello(name) {
    return `Hello ${name}`;
    //return "string literal";
  }

  addStock() {
    const name = prompt("Enter stock name: ");
    const ticker = prompt("Enter stock ticker: $");
    const price = prompt("Enter current stock price: $");

    const stocks = this.state.Stocks;
    stocks.push({name: name, ticker: ticker, price: price});
    this.setState({Stocks: stocks}, () => {
      //alert(this.state.Stocks.length)
    });
  }

  render() {
    const pizza = this.state.pizza;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            <Stock name={"Gracen"} ticker={"$G"} price={420}/>
            <Stock name={"Tesla"} ticker={"$TSLA"} price={264}/>
          </p>
          {
            pizza.map((p,i) => {
              return <Pizza name={p.name} size={p.size}/>
            })

          }

          {
            this.state.Stocks.map((stock, index) => {
              return <Stock name={stock.name} ticker={stock.ticker} price={stock.price}/>
            })
          }

          <button type="button" onClick={this.addStock.bind(this)}>add stock</button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            I'm going to learn React.
            {this.sayHello('Gracen')}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
