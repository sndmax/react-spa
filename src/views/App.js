import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import ItemsList from './ItemsList';
import Sandbox from './Sandbox';
import LoginControl from './Account';

class App extends Component {
    render() {
        const itemList = {
            title: 'Список',
            items: [
                "item1",
                "item2",
                "item3",
                "item4",
                "item5"
            ]
        };

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <LoginControl />
                </div>
                <ItemsList data={itemList}/>
                <Sandbox />
            </div>
        );
    }
}

export default App;