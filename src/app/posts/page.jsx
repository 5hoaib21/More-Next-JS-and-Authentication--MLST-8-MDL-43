import React from "react";

// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("failed to fetch posts");
  }
  return res.json();
};

// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (err) {
//     throw new Error("failed to fetch data");
//   }
// };

const PostsPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();

  const posts = getPosts();
  return (
    <div>
      <h2>Posts are coming soon{posts.length}</h2>
    </div>
  );
};

export default PostsPage;
