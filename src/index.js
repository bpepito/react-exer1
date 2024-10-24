//Call all functions inside services and log updated value/s
import {
  getAllUsers,
  getUserById,
  updateUser,
  addUser,
} from "./services/users";
import {
  getPosts,
  getPostsByUser,
  getPostById,
  addPost,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostBy,
  deletePostsByUserId,
} from "./services/posts";
import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
} from "./services/comments";

// users
updateUser(1, { email: "roger@77.com" });
console.log("get all users: ", getAllUsers());

console.log("get user by id: ", getUserById(1));

const newUser = {
  name: "B Pepito",
  username: "BP",
  email: "bpepito@sample.com",
  phone: "1-11-11-11",
  address: {
    street: "sample.st",
  },
  company: {
    name: "seven seven",
  },
};
addUser(newUser);

// comments
console.log("get comments by postId: ", getCommentsByPostId(2));
console.log("delete comment: ", deleteCommentById(3));

updateCommentBody(1, "hala");
console.log("get comment by id: ", getCommentById(1));

const newComment = {
  postId: 500,
  name: "B Pepito",
  email: "bpepito@sample.com",
  body: "sample body.",
};
addComment(newComment);

// get by id
console.log("get all posts: ", getPosts());
console.log("get posts by user: ", getPostsByUser(1));

console.log("delete by post: ", deletePostBy(4));
console.log("delete post by userId: ", deletePostsByUserId(5));

updatePostTitle(1, "anything");
console.log("get post by id with updated title: ", getPostById(1));

updatePostBody(2, "everything");
console.log("get post by id with updated body: ", getPostById(2));

updatePost(3, { title: "everything", body: "anything" });
console.log(
  "get post by id with both updated title and body: ",
  getPostById(3)
);

const newPost = {
  userId: 1000,
  title: "sample title",
  body: "sample body",
};
addPost(newPost);

