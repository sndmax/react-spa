import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.scss';

class Main extends Component {
    render() {
        return (
           <main>
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
               <div className="sidebar">
                   <form action="">
                       <input type="text" name="search" value="  Search..."/>
                   </form>
                   <div className="posts-list">
                       <h2>Popular posts</h2>
                       <ul>
                           <li><a href="">Post1</a></li>
                           <li><a href="">Post2</a></li>
                           <li><a href="">Post3</a></li>
                           <li><a href="">...</a></li>
                       </ul>
                   </div>
                   <div className="tags-list">
                       <h2>Tags</h2>
                       <ul className="tags-list-unordered">
                           <li><a href="">Tag 11</a></li>
                           <li><a href="">Tag 22</a></li>
                           <li><a href="">Tag 33</a></li>
                           <li><a href="">Tag 11</a></li>
                           <li><a href="">Tag 22</a></li>
                           <li><a href="">Tag 33</a></li>
                       </ul>
                   </div>
               </div>
           </main>
        );
    }
}
export default Main;