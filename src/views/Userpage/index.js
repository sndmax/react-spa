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
            <div className="c-userpage">
                <div className="c-userpage__info">
                    <h2 className="c-userpage__header c-userpage__header--padding">Blogger&#39;s info&#58;</h2>
                    <div className="c-userpage__avatar"></div>
                    <ul className="c-userpage__card">
                        <li>
                            <span className="c-userpage__field">First Name:</span>
                            <p className="c-userpage__value c-userpage__value--bold">Julia</p>
                        </li>
                		<li>
                            <span className="c-userpage__field">Last Name:</span>
                			<p className="c-userpage__value c-userpage__value--bold">Hodikova</p>
                		</li>
                		<li>
                		    <span className="c-userpage__field">E-mail address:</span>
                			<p className="c-userpage__value c-userpage__value--bold">jhodikova@mail.ru</p>
                		</li>
                    </ul>
                </div>

                <div className="c-userpage__about">
                	<h3 className="c-userpage__header">About&#58;</h3>
                	<p className="c-userpage__text c-userpage__text--font_size">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia architecto assumenda, quisquam delectus officia perspiciatis eius nobis fugit optio iure! Soluta, necessitatibus quod, ea rerum illo quo laboriosam nobis excepturi?
                	</p>
                </div>

                <div className="c-userpage__posts">
                	<h3 className="c-userpage__header">User&#39;s posts&#58;</h3>
                	<ul className="l-list">
                		<li><a href="#">Lorem ipsum | <span className="l-list__item">05.08.2016</span></a></li>
                		<li><a href="#">Lorem ipsum dolor | <span className="l-list__item">01.02.2017</span></a></li>
                		<li><a href="#">Lorem | <span className="l-list__item">12.08.2015</span></a></li>
                		<li><a href="#">Lorem ips | <span className="l-list__item">07.07.2007</span></a></li>
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
