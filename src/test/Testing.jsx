import React, { useState } from "react";

const Testing = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setPosts(json);
    setLoading(false);
  };

  const clearPosts = () => {
    setPosts([]);
  };

  return (
    <React.Fragment>
      <div>
        <header>
          <h1>React Testing</h1>
        </header>
        <main>
          <section>
            <button onClick={fetchPosts} type="button">
              Fetch Posts
            </button>
            <button onClick={clearPosts} type="button">
              Clear Posts
            </button>
          </section>
          {loading && <p>Loading...</p>}
          {posts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <h3>{post.body}</h3>
            </article>
          ))}
        </main>
      </div>
    </React.Fragment>
  );
};

export default Testing;
