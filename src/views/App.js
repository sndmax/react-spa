import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import ItemsList from './ItemsList';

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
        }

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <ItemsList data={itemList}/>
            </div>
        );
    }
}

export default App;