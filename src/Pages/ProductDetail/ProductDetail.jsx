import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/end.points";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductsDetail() {
  const [product, setproduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error:", err);
        setLoading(false);
      });
  }, [productId]);
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          // renderAdd={true}
        />
      )}
      <div></div>
    </Layout>
  );
}

export default ProductsDetail;
