import React, { useState, useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    };
    getPosts();
  }, []);

  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="blog">
      <h1 style={{ textAlign: "center" }}>My Blog</h1>
      <div className="container">
        <Posts posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
}

export default Blog;
