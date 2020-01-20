const postStore = {
  _posts: [
    { id: 1, title: 'posting with id 1' },
    { id: 2, title: 'posting with id 2' },
    { id: 3, title: 'posting with id 3' },
    { id: 4, title: 'posting with id 4' },
  ],
  get posts() {
    return this._posts;
  },

  get postsLength() {
    return this._posts.length;
  },

  getPost(id) {
    return this.posts.find((post) => post.id == id);
  },

  createPost(title) {
    this._posts = [...this.posts, {
      title,
      id: this._posts.length + 1, // last index +1 로 나중에 수정 하도록.
    }];
  },

  removePost(id) {
    console.log('removed');
    this._posts = this.posts.filter((el) => el.id !== id);
  },
};

export default postStore;
