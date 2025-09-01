import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <section>
      <p>{params.ProductId}</p>
    </section>
  );
};

export default ProductDetail;
