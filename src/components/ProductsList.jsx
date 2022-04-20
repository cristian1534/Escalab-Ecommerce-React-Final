import React, { useEffect, useState, useRef } from "react";
import useGetProducts from "../custom-hooks/useGetProducts";
import Product from "./Product";
import Search from "./Search";
import NotProductFound from "./NotProductFound";
import Loader from "./Loader";

const ProductsList = () => {
  const { products, loading, getProducts } = useGetProducts();
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="form-group mt-5">
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : !filteredProducts.length ? (
        <NotProductFound />
      ) : (
        filteredProducts.map((prod) => <Product key={prod.id} data={prod} />)
      )}
    </div>
  );
};

export default ProductsList;
