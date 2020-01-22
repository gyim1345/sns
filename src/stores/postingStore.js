/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const DEFAULT_IMAGE = '../static/images/defaultnumber.png';

const postStore = {
  _posts: [
    { id: 1, title: 'posting with id 1', imageUrl: '../static/images/1.jpg', userName: 'gibong' },
    { id: 2, title: 'posting with id 2', imageUrl: '../static/images/2.jpg', userName: 'gibong' },
    { id: 3, title: 'posting with id 3', imageUrl: '../static/images/3.jpeg', userName: 'gibong' },
    { id: 4, title: 'posting with id 4', imageUrl: '../static/images/4.png', userName: 'gibong'},
    { id: 5, title: 'posting with id 5', imageUrl: DEFAULT_IMAGE, userName: 'asd'},
  ],

  get posts() {
    return this._posts;
  },

  get postsLength() {
    return this._posts.length;
  },

  getuserPosts(name) {
    return this._posts.filter((post) => post.userName == name ) 
  },


  getPost(id) {
    return this.posts.find((post) => post.id == id);
  },

  createPost(title, name) {
    this._posts = [...this.posts, {
      title,
      id: this._posts.length + 1, // last index +1 로 나중에 수정 하도록.
      imageUrl: DEFAULT_IMAGE,
      userName: name
    }];
  },

  removePost(id) {
    this._posts = this.posts.filter((el) => el.id !== id);
  },
};

export default postStore;
