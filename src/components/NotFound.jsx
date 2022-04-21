import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container">
    <img
      src="https://i0.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
      className="rounded mx-auto container"
      alt="error-img"
    ></img>
    <Link to="/">
      <button
        type="button"
        className="btn btn-outline-success btn-sm container"
      >
        Back Home
      </button>
    </Link>
  </div>
);

export default NotFound;
