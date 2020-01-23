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
    return this.users.find(userInfo => userInfo.name == userName).userFollow;
  },

  getFollowerNumberOfUser(userName) {
    return this.users.find(userInfo => userInfo.name == userName).userFollow
      .length;
  },

  addFollower(userName, targetUserName) {
    return this.users
      .find(userInfo => userInfo.name == userName)
      .userFollow.push(targetUserName);
  },

  //   getCommentFromPostId(postId) {
  //     return this.users.filter((comment) => comment.postLID == postId);
  //   },

  //   getComment(id) {
  //     return this.users.find((comment) => comment.id == id);
  //   },

  createComment(id, titlee) {
    this.users = [
      ...this.users,
      {
        id: this.users.length + 1, // last index +1 로 나중에 수정 하도록.
        postLId: id,
        title: titlee
      }
    ];
  }
};

export default userStore;
