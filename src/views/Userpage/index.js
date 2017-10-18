import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Userpage.scss';

class Userpage extends Component {

    render() {
        const  user  = {
                               "id": 1,
                               "email": "Gurmeet@ma.il",
                               "password": "Gurmeet",
                               "first_name": "Kallistos",
                               "last_name": "Gurmeet",
                               "profile_img": "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
                               "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias asperiores aut culpa debitis doloribus dolorum enim esse eum harum illo iste iure magni minima molestiae molestias nesciunt officia possimus, quasi, quidem quis quos soluta tempora ullam ut vel veritatis voluptatibus."
                             };

        return (
            <div className="userpage">
                <div className="profile">
                	<h2 className="profile__header">Blogger&#39;s info&#58;</h2>
                	<div className="profile__avatar"></div>
                	<ul className="profile__info">
                		<li>First Name:
                			<p className="profile__info--bold">Julia</p>
                		</li>
                		<li>Last Name:
                			<p className="profile__info--bold">Hodikova</p>
                		</li>
                		<li>E-mail address:
                			<p className="profile__info--bold">jhodikova@mail.ru</p>
                		</li>
                	</ul>
                </div>

                <div className="profile__about">
                	<h3 className="profile__about__header">About&#58;</h3>
                	<p className="profile__about__text profile__about--font_size">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia architecto assumenda, quisquam delectus officia perspiciatis eius nobis fugit optio iure! Soluta, necessitatibus quod, ea rerum illo quo laboriosam nobis excepturi?
                	</p>
                </div>

                <div className="profile__posts">
                	<h3 className="profile__posts__header">User&#39;s posts&#58;</h3>
                	<ul className="profile__posts__list">
                		<li><a href="#">Lorem ipsum | <span className="profile__posts__list__date">05.08.2016</span></a></li>
                		<li><a href="#">Lorem ipsum dolor | <span className="profile__posts__list__date">01.02.2017</span></a></li>
                		<li><a href="#">Lorem | <span className="profile__posts__list__date">12.08.2015</span></a></li>
                		<li><a href="#">Lorem ips | <span className="profile__posts__list__date">07.07.2007</span></a></li>
                	</ul>
                </div>
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
