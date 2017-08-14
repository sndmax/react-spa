import React, { Component } from 'react';

function formatDate(date) {
    return date.toLocaleString();
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet.',
    author: {
        name: 'User1',
        avatarUrl: 'http://via.placeholder.com/150x150'
    }
};

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            counter: 0
        };

        this.increment = parseInt(props.increment);

        this.update = this.update.bind(this);
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

    update() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + parseInt(props.increment)
        }));
    }

    render() {
        return (
            <div>
                <h2>Curent time: {this.state.date.toLocaleTimeString()}</h2>
                <h3>Counter: {this.state.counter}</h3>
                <button onClick={this.update}>Click</button>
            </div>
        );
    }
}

class Sandbox extends Component {
    render() {
        return (
            <div>
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author} />
                <Clock increment='1' />
            </div>
        );
    }
}



export default Sandbox;