const userStore = {
  _users: [
    { name: 'gibong', userId: 1, userFollow: ['guy'] },
    { name: 'guy', userId: 2, userFollow: ['gibong'] },
    { name: 'noone', userId: 3, userFollow: [] },
  ],


  get users() {
    return this._users;
  },

  get usersLength() {
    return this._users.length;
  },

  getFollowerFromUser(userName) {
    return this.users.find((userInfo) => (userInfo.name == userName)).userFollow;
  },

  getFollowerNumberOfUser(userName) {
    return this.users.find((userInfo) => (userInfo.name == userName)).userFollow.length;
  },


//   getCommentFromPostId(postId) {
//     return this.users.filter((comment) => comment.postLID == postId);
//   },

//   getComment(id) {
//     return this.users.find((comment) => comment.id == id);
//   },

  createComment(id, titlee) {
    this._users = [...this.users, {
      id: this._users.length + 1, // last index +1 로 나중에 수정 하도록.
      postLId: id,
      title: titlee,
    }];
  },
};


export default userStore;
