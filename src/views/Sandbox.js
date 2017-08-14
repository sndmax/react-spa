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
            date: new Date()
        };

        this.increment = parseInt(props.increment);

        //this.update = this.update.bind(this);
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
            <div>
                <h2>Curent time: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            counter: 0
        };

        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    update(e) {
        e.preventDefault();

        if(this.state.isToggleOn) {
            this.setState((prevState, props) => ({
                counter: prevState.counter + parseInt(props.increment)
            }));
        }

    }

    render() {
        return (
            <div>
                <h3>Counter: {this.state.counter}</h3>
                <button onClick={(e) => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={(e) => this.update(e)}>Click</button>
            </div>
        );
    }
}

class Sandbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        }
    }
/*
    componentDidMount() {
        fetchPosts().then(response => {
            this.setState({
                posts: response.posts
            });
        });

        fetchComments().then(response => {
            this.setState({
                comments: response.comments
            });
        });
    }
*/
    render() {
        return (
            <div>
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author} />
                <Clock />
                <Toggle increment='1' />
            </div>
        );
    }
}



export default Sandbox;