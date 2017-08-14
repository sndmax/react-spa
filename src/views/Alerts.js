import React, { Component } from 'react';
import './Alerts.css';

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className="Warning-content">
            {props.message}
        </div>
    );
}

class Warning extends Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div className="Warning">
                <a href="#" onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </a>
                <WarningBanner warn={this.state.showWarning} message="Warning! Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            </div>
        );
    }
}

export default Warning;