import React, { useState } from "react";
export default function Post() {
  const [posts, setPosts] = useState([]);

  const onClickFetchPost = async () => {
    const res = await fetch("/post", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const posts = await res.json();
    console.log(posts);
    if (res.ok) {
      setPosts(posts.posts);
    } else {
      setPosts([]);
    }
  };

  return (
    <div>
      <h1>Post</h1>
      <div>
        <button onClick={onClickFetchPost}>get posts</button>
        <div>
          <ul>
            {posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
