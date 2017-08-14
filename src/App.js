import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const propsValues = {
  items: [
            "Hello",
            "World"
  ]
};

class Item extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Press"};

        this.press = this.press.bind(this);
    }

    press() {
        var className = (this.state.class==='off')?'on':'off';
        this.setState({class: className});
    }

    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
    }
}

class Hello extends Component {
  render() {
    return (
        <div>
          <ul>
              {
                  this.props.data.items.map(function(item){
                  return <Item key={item} name={item} />
                  })
              }
          </ul>
        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello data={propsValues}/>
        <Button />
      </div>
    );
  }
}

export default App;
