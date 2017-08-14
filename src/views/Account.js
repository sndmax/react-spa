import React, { Component } from 'react';
import './Account.css';

function UserGreeting(props) {
    return (
        <div>
            <h2>Welcome to React!</h2>
            <Mailbox unreadMessages={messages} />
        </div>
    );
}

function GuestGreeting(props) {
    return <h2>Please sign up.</h2>
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn)
        return <UserGreeting />;
    else
        return <GuestGreeting />;
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            {unreadMessages.length > 0 &&
                <h3>
                    You have <span className="Unread">{unreadMessages.length}</span> unread messages.
                </h3>
            }
        </div>
    );
}

const messages = ['React', 'Re: React'];

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {
                    isLoggedIn ?
                    (<LogoutButton onClick={this.handleLogoutClick} />) :
                    (<LoginButton onClick={this.handleLoginClick} />)
                }
            </div>
        );
    }
}

export default LoginControl;