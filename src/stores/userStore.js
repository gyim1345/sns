const userStore = {
  users: [
    { name: "gibong", userId: 1, userFollow: ["guy"] },
    { name: "guy", userId: 2, userFollow: ["gibong"] },
    { name: "noone", userId: 3, userFollow: [] }
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
