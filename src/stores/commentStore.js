const commentStore = {
  comments: [
    {
      id: 1,
      postLId: 1,
      title: "comment with postLId 1",
      userWritten: "gibong"
    },
    {
      id: 2,
      postLId: 2,
      title: "comment with postLId 2",
      userWritten: "gibong"
    },
    {
      id: 3,
      postLId: 3,
      title: "comment with postLId 3 A",
      userWritten: "gibong"
    },
    {
      id: 4,
      postLId: 3,
      title: "comment with postLId 3 B",
      userWritten: "gibong"
    },
    {
      id: 5,
      postLId: 3,
      title: "comment with postLId 3 C",
      userWritten: "gibong"
    },
    {
      id: 6,
      postLId: 3,
      title: "comment with postLId 3 D",
      userWritten: "gibong"
    },
    {
      id: 7,
      postLId: 3,
      title: "comment with postLId 3 E",
      userWritten: "gibong"
    },
    {
      id: 8,
      postLId: 3,
      title: "comment with postLId 3 F",
      userWritten: "gibong"
    },
    { id: 9, postLId: 4, title: "comment with postLId 4", userWritten: "guy" },
    {
      id: 10,
      postLId: 5,
      title: "comment with postLId 5",
      userWritten: "noone"
    }
  ],

  get commentList() {
    return this.comments;
  },

  get commentsLength() {
    return this.comments.length;
  },

  getCommentFromPostId(postId) {
    return this.comments.filter(comment => comment.postLID === postId);
  },

  getComment(id) {
    return this.comments.find(comment => comment.id === id);
  },

  createComment(id, titlee) {
    this.comments = [
      ...this.comments,
      {
        id: this.comments.length + 1, // last index +1 로 나중에 수정 하도록.
        postLId: id,
        title: titlee
      }
    ];
  }
};

export default commentStore;
