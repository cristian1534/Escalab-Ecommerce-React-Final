import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NotFavoritesList from "../components/NotFavoritesList";
import { deleteFavorite } from "../actions/index";
import ModalDeleteFavorite from "./ModalDeleteFavorite";
import propTypes from "prop-types";

const FavoriteList = (props) => {
  const { favoritesProducts } = props;

  const handleDeleteFavorite = (id) => {
    props.deleteFavorite(id);
  };

  return (
    <div>
      {!favoritesProducts.length ? (
        <div className="container">
          <NotFavoritesList />
          <Link to="/">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm ml-2 container"
            >
              Back Home
            </button>
          </Link>
        </div>
      ) : (
        favoritesProducts.map((fp) => (
          <div className="container mt-5" key={fp.data.id}>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={fp.data.image} alt="fp" className="w-25" />
                  </td>
                  <th scope="row">{fp.data.title}</th>
                  <td>$ {fp.data.price}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => handleDeleteFavorite(fp.data.id)}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Confirm
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <ModalDeleteFavorite />
          </div>
        ))
      )}
    </div>
  );
};

FavoriteList.prototype = {
  favoritesProducts: propTypes.array,
  handleDeleteFavorite: propTypes.func,
  deleteFavorite: propTypes.func,
};

const mapStateToProps = (state) => {
  return {
    favoritesProducts: state.favoritesProducts,
  };
};

const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
