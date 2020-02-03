import countStore from "./countStore";

const commentStore = {
  comments: [
    {
      id: 1,
      postLId: 1,
      title: "comment with postLId 1",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    {
      id: 2,
      postLId: 2,
      title: "comment with postLId 2",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    {
      id: 3,
      postLId: 3,
      title: "comment with postLId 3 A",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    {
      id: 4,
      postLId: 3,
      title: "comment with postLId 3 B",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    {
      id: 5,
      postLId: 3,
      title: "comment with postLId 3 C",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    {
      id: 6,
      postLId: 3,
      title: "comment with postLId 3 D",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"]
    },
    {
      id: 7,
      postLId: 3,
      title: "comment with postLId 3 E",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    {
      id: 8,
      postLId: 3,
      title: "comment with postLId 3 F",
      userWritten: "gibong",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    { id: 9,
      postLId: 4,
      title: "comment with postLId 4",
      userWritten: "guy",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
    },
    {
      id: 10,
      postLId: 5,
      title: "comment with postLId 5",
      userWritten: "noone",
      like: ["gibong", "guy", "noone"],
      reply: ["hi12", "hi22"]
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

  getReplyFromComment(comment) {
    return this.comments.find(x => x === comment).reply;
  },

  removeComment(postingId, commentId) {
  const removeElement = this.comments.find(
      comment => comment.id === commentId && comment.postLId === postingId
      );
    this.comments = this.comments.filter(comment => comment !== removeElement);
  },

  createComment(id, titlee, commentWrittenBy) {
    this.comments = [
      ...this.comments,
      {
        id: countStore.useCommentCount(),
        postLId: id,
        title: titlee,
        userWritten: commentWrittenBy,
        like: [],
        reply: []
      }
    ];
  }
};

export default commentStore;
