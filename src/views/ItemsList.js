import React, { Component } from 'react';
import './ItemsList.css';

class Item extends Component {
    render() {
        return <li>{this.props.name}</li>
    }
}

class ItemsList extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.data.title }</h2>
                <ul className="ItemsList">
                    {
                        this.props.data.items.map(function (item) {
                            return <Item key={item.toString()} name={item}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ItemsList;
