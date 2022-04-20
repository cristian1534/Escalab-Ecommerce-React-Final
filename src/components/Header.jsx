import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const TextNav = styled.span`
  margin: 20px 0 10px;
  padding: 15px;
  font-weight: bold;
  color: yellow;
  text-decoration: none;
  &:hover,
  &:focus {
    color: red;
  }
  &:active {
    color: orange;
  }
  `;

  const logoUrl =
    "https://yt3.ggpht.com/cJ6pprgVYH6qbWu8IVQNSA50yqUHkIIcGXK_Qej30gDl1VKce8MVIfQ8NzMIvvKFOsNyqjlAHg=s900-c-k-c0x00ffffff-no-rj";

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img
            src={logoUrl}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="Logo"
          />
          <TextNav>Escalab E-Commerce</TextNav>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <TextNav>Home</TextNav>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                <TextNav>Favorites</TextNav>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
