import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import ItemsList from './ItemsList';
import Sandbox from './Sandbox';
import LoginControl from './Account';
import Warning from './Alerts';
import Time from './Time';

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

        const afterStyle = {
            clear: 'both'
        };

        return (
            <div className="App">
                <div className="App-header">
                    <Warning />
                    <div style={afterStyle}/>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <LoginControl />
                    <Time />
                </div>
                <ItemsList data={itemList}/>
                <Sandbox />
            </div>
        );
    }
}

export default App;