import React, { Component } from 'react';
import { connect } from 'react-redux';
import Articles from 'views/Articles';
import PreLoader from 'views/PreLoader';
import { getPosts } from 'actions/posts';

class Posts extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(getPosts());
    }

    getContent() {
        const { status, posts } = this.props;

        switch (status) {
            case 'ERROR':
                return <p>There was an error loading the items</p>;

            case 'LOADING':
                return <PreLoader />;

            case 'DONE':
                return <Articles posts={posts} />;

            default:
                return <PreLoader />;
        }
    }

    render() {
        return (
            <div className="blogs">
                               <div className="blog-item">
                                   <h1><a href="">Lorem ipsum dolor sit amet</a></h1>
                                   <a href=""><img src="img/mountains-clouds-forest-fog.jpg" alt="pic1"/></a>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iusto optio, sed totam debitis perferendis in voluptatibus exercitationem dolores aspernatur aliquid, porro fuga molestias consequuntur atque culpa repudiandae fugiat sit! Voluptatibus numquam tenetur voluptate ut vel voluptas libero nulla quisquam. Illo fugiat autem esse voluptatum voluptas atque, commodi minus natus!Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                   <hr/>
                                   <ul className="item-list">
                                       <li>21 Aug 2017 by Kallistos Gurmeet</li>
                                       <li><a href=""><mark>black</mark></a></li>
                                       <li><a href=""><mark>new</mark></a></li>
                                       <li><a href=""><mark>house</mark></a></li>
                                       <li><a href=""><mark>iste id</mark></a></li>
                                   </ul>
                               </div>
                               <div className="blog-item">
                                   <h1><a href="">Lorem ipsum dolor sit amet</a></h1>
                                   <a href=""><img src="img/black-and-white-animal-dog-pet.jpg" alt="pic2"/></a>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iusto optio, sed totam debitis perferendis in voluptatibus exercitationem dolores aspernatur aliquid, porro fuga molestias consequuntur atque culpa repudiandae fugiat sit! Voluptatibus numquam tenetur voluptate ut vel voluptas libero nulla quisquam. Illo fugiat autem esse voluptatum voluptas atque, commodi minus natus!Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                   <hr/>
                                   <ul className="item-list">
                                       <li>21 Aug 2017 by Kallistos Gurmeet</li>
                                       <li><a href=""><mark>black</mark></a></li>
                                       <li><a href=""><mark>new</mark></a></li>
                                       <li><a href=""><mark>house</mark></a></li>
                                       <li><a href=""><mark>iste id</mark></a></li>
                                   </ul>
                               </div>
                               <div className="blog-item">
                                   <h1><a href="">Lorem ipsum dolor sit amet</a></h1>
                                   <a href=""><img src="img/pexels-photo-331991.jpeg" alt="pic3"/></a>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iusto optio, sed totam debitis perferendis in voluptatibus exercitationem dolores aspernatur aliquid, porro fuga molestias consequuntur atque culpa repudiandae fugiat sit! Voluptatibus numquam tenetur voluptate ut vel voluptas libero nulla quisquam. Illo fugiat autem esse voluptatum voluptas atque, commodi minus natus!Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                   <hr/>
                                   <ul className="item-list">
                                       <li>21 Aug 2017 by Kallistos Gurmeet</li>
                                       <li><a href=""><mark>black</mark></a></li>
                                       <li><a href=""><mark>new</mark></a></li>
                                       <li><a href=""><mark>house</mark></a></li>
                                       <li><a href=""><mark>iste id</mark></a></li>
                                   </ul>
                               </div>
                               <div className="more-items"><button>More</button></div>
                           </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts.items,
        status: store.posts.status
    };
};

export default connect(mapStateToProps)(Posts);
