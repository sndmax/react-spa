import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };

        this.increment = parseInt(props.increment);
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h2>Curent time: {this.state.date.toLocaleTimeString()}</h2>
        );
    }
}

export default Clock;