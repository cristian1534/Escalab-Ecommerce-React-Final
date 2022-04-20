import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFavorite } from "../actions/index";
import propTypes from "prop-types";

const Product = (props) => {
  const [favorite, setFavorite] = useState(false);

  const { data, favoritesProducts } = props;
  const { title, description, image, id } = data;

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const isFavorite = () => {
    const result = favoritesProducts.filter((fp) => fp.data.id === id);
    if (result) setFavorite(true);
  };

  useEffect(() => {
    isFavorite();
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="card-group mt-3">
        <div className="card text-center border-info">
          <div className="card-body">
            <img src={image} alt="Card-Product" className="w-25" />
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <Link to={`details/${id}`}>
              <button
                type="button"
                className="btn btn-outline-success btn-sm ml-2"
              >
                Details
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-outline-warning btn-sm ml-2"
              onClick={() => handleSetFavorite()}
            >
              Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// component documentation
Product.prototype = {
  data: propTypes.object,
  title: propTypes.string,
  favoritesProducts: propTypes.array,
  handleSetFavorite: propTypes.func,
  setFavorite: propTypes.func,
};

const mapStateToProps = (state) => {
  return {
    favoritesProducts: state.favoritesProducts,
  };
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
