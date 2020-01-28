const baseurl = "http://localhost:8080/";
const DEFAULT_IMAGE = `${baseurl}/static/images/defaultnumber.png`;
const postStore = {
  posts: [
    {
      id: 1,
      title: "posting with id 1",
      imageUrl: `${baseurl}/static/images/1.jpg`,
      userName: "gibong",
      like: ["gibong", "guy", "noone"]
    },
    {
      id: 2,
      title: "posting with id 2",
      imageUrl: `${baseurl}/static/images/2.jpg`,
      userName: "gibong",
      like: ["gibong", "guy", "noone"]
    },
    {
      id: 3,
      title: "posting with id 3",
      imageUrl: `${baseurl}/static/images/3.jpeg`,
      userName: "gibong",
      like: ["gibong", "noone"]
    },
    {
      id: 4,
      title: "posting with id 4",
      imageUrl: `${baseurl}/static/images/4.png`,
      userName: "gibong",
      like: ["guy", "noone"]
    },
    {
      id: 5,
      title: "posting with id 5",
      imageUrl: DEFAULT_IMAGE,
      userName: "guy",
      like: ["noone"]
    },
    {
      id: 6,
      title: "posting with id 6",
      imageUrl: DEFAULT_IMAGE,
      userName: "guy",
      like: []
    },
    {
      id: 7,
      title: "posting with id 7",
      imageUrl: DEFAULT_IMAGE,
      userName: "guy",
      like: ["guy", "noone"]
    },
    {
      id: 8,
      title: "posting with id 8",
      imageUrl: DEFAULT_IMAGE,
      userName: "noone",
      like: ["gibong", "guy"]
    },
    {
      id: 9,
      title: "posting with id 9",
      imageUrl: DEFAULT_IMAGE,
      userName: "noone",
      like: ["noone"]
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
        id: Date.now(), // last index +1 로 나중에 수정 하도록.
        imageUrl: DEFAULT_IMAGE,
        userName: name,
        like: []
      }
    ];
  },

  removePost(id) {
    this.posts = this.posts.filter(el => el.id !== id);
  }
};

export default postStore;
