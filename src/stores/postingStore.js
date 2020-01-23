/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const DEFAULT_IMAGE = "../static/images/defaultnumber.png";

const postStore = {
  posts: [
    {
      id: 1,
      title: "posting with id 1",
      imageUrl: "../static/images/1.jpg",
      userName: "gibong"
    },
    {
      id: 2,
      title: "posting with id 2",
      imageUrl: "../static/images/2.jpg",
      userName: "gibong"
    },
    {
      id: 3,
      title: "posting with id 3",
      imageUrl: "../static/images/3.jpeg",
      userName: "gibong"
    },
    {
      id: 4,
      title: "posting with id 4",
      imageUrl: "../static/images/4.png",
      userName: "gibong"
    },
    {
      id: 5,
      title: "posting with id 5",
      imageUrl: DEFAULT_IMAGE,
      userName: "asd"
    },
    {
      id: 6,
      title: "posting with id 6",
      imageUrl: DEFAULT_IMAGE,
      userName: "asd"
    },
    {
      id: 7,
      title: "posting with id 7",
      imageUrl: DEFAULT_IMAGE,
      userName: "asd"
    },
    {
      id: 8,
      title: "posting with id 8",
      imageUrl: DEFAULT_IMAGE,
      userName: "noone"
    },
    {
      id: 9,
      title: "posting with id 9",
      imageUrl: DEFAULT_IMAGE,
      userName: "noone"
    }
  ],

  get postList() {
    return this.posts;
  },

  get postsLength() {
    return this.posts.length;
  },

  getuserPosts(name) {
    return this.posts.filter(post => post.userName === name);
  },

  getPost(id) {
    return this.posts.find(post => post.id === Number(id));
  },

  createPost(title, name) {
    this.posts = [
      ...this.posts,
      {
        title,
        id: this.posts.length + 1, // last index +1 로 나중에 수정 하도록.
        imageUrl: DEFAULT_IMAGE,
        userName: name
      }
    ];
  },

  removePost(id) {
    this.posts = this.posts.filter(el => el.id !== id);
  }
};

export default postStore;
