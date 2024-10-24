import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // ES6

import Blog from "../Blog/Blog";

export default function Blogs({ handleAddBookmarks, handleMarkAsRead }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 m-4">
      {/* <h2>Blogs: {blogs.length}</h2> */}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Blog
            handleAddBookmarks={handleAddBookmarks}
            blog={blog}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        </div>
      ))}
    </div>
  );
}

Blogs.propTypes = {
  handleAddBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
}  
 