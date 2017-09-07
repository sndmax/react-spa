import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Userpage.scss';


class Userpage extends Component {

    render() {
        const { user } = this.props;

        return (
            <div>
                <h2 className="userpage_header">User's info:</h2>
                <div className="row userpage">
                    <img className="userpage_image" src={user.profile_img} />
                    <ul className="col-xs-8">
                        <li>
                            <p>First Name:</p>
                            <b>{ user.first_name }</b>
                        </li>
                        <li>
                            <p>Last Name:</p>
                            <b>{ user.last_name }</b>
                        </li>
                        <li>
                            <p>E-mail address:</p>
                            <b>{ user.email }</b>
                        </li>
                    </ul>
                </div>
                <p>About:</p>
                <b>{ user.about }</b>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.auth.data
    };
};

export default connect(mapStateToProps)(Userpage);