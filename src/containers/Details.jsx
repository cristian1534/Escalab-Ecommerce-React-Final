import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ModalPayment from "../components/ModalPayment";
import Loader from "../components/Loader";


const Details = () => {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products/" + id);
      setProductDetail(result.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ):
      <div className="container">
        <br />
        <br />
        <br />
        <div className="card-group mt-3">
          <div className="card text-center border-info">
            <div className="card-body">
              <img
                src={productDetail.image}
                alt="Card-Product"
                className="w-25"
              />
              <h4 className="card-title">{productDetail.title}</h4>
              <p className="card-text">{productDetail.description}</p>
              <h2>Price: $ {productDetail.price}</h2>
              <div className="row container">
                <ModalPayment />
                <Link to="/">
                  <button type="button" class="btn btn-outline-success btn-sm ml-3">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      }
    </div>
  );
};

export default Details;
