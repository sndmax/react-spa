import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import MyForm from './Toggle';

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
        this.state = {
            class: "off",
            label: "Login",
            title: "Login please",
            name: "Alexey"
        };

        this.press = this.press.bind(this);
    }

    press() {
        var className = (this.state.class==='off')?'on':'off';
        var _label = (this.state.label==='Login')?'Logout':'Login';
        var _title = (this.state.title==='Welcome')?'Login please':'Welcome';
        this.setState({class: className});
        this.setState({label: _label});
        this.setState({title: _title});
    }

    render() {
        return(
            <div>
                <h2>
                    {this.state.title}
                </h2>
                <button onClick={this.press} className={this.state.class}>
                    {this.state.label}
                </button>
            </div>
        );
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
        <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Improve your skills</h2>
            </div>
            <p className="App-intro">
              Try out something.
            </p>
            {/*<Hello data={propsValues}/>*/}
            <Button />
          </div>
            <Clock />
        </div>
    );
  }
}

export default App;
