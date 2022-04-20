import axios from "axios";
import { useState } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const result = response.data;
      setProducts(result);
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  return { products, loading, error, getProducts };
};

export default useGetProducts;
