const baseurl = "http://localhost:8080";
const userStore = {
  users: [
    { name: "gibong", userId: 1, userFollow: ["guy"], userURL: `${baseurl}/static/images/user1.png`},
    { name: "guy", userId: 2, userFollow: ["gibong"], userURL: `${baseurl}/static/images/user2.png` },
    { name: "noone", userId: 3, userFollow: [], userURL: `${baseurl}/static/images/user3.png` }
  ],

  get userList() {
    return this.users;
  },

  get usersLength() {
    return this.users.length;
  },

  getFollowerFromUser(userName) {
    return this.users.find(userInfo => userInfo.name === userName).userFollow;
  },

  getFollowerNumberOfUser(userName) {
    return this.users.find(userInfo => userInfo.name === userName).userFollow
      .length;
  },

  addFollower(userName, targetUserName) {
    return this.users
      .find(userInfo => userInfo.name === userName)
      .userFollow.push(targetUserName);
  },

  getUserImage(userName) {
    return this.users.find(userInfo => userInfo.name === userName).userURL;
  },

  createComment(id, titlee) {
    this.users = [
      ...this.users,
      {
        id: this.users.length + 1,
        postLId: id,
        title: titlee
      }
    ];
  }
};

export default userStore;
