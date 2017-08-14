/**
 * Created by Aliaksei_Rachanok on 8/14/2017.
 */
import React, { Component } from 'react';
import './Square.css';



class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="clock">
                <h2> Current time: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;