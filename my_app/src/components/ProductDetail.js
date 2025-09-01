import React from "react";
// react-router-dom 라이브러리에서 useParams 훅을 가져옵니다.
// 이 훅은 URL의 동적 파라미터 값을 가져오는 데 사용됩니다.
import { useParams } from "react-router-dom";

// 상품 상세 페이지를 위한 컴포넌트입니다.
const ProductDetail = () => {
  // useParams 훅을 호출하여 URL 파라미터가 담긴 객체를 가져옵니다.
  // App.js에서 라우트가 path: "/products/:ProductId"로 정의되었기 때문에,
  // params 객체는 { ProductId: 'URL에서 전달된 값' } 형태가 됩니다.
  const params = useParams();

  // 개발자 도구 콘솔에서 params 객체의 내용을 확인하기 위한 코드입니다.
  // 예를 들어, URL이 /products/p1 이라면 콘솔에 {ProductId: 'p1'}이 출력됩니다.
  console.log(params);

  return (
    <section>
      <h1>Product Detail</h1>
      {/* params 객체에서 ProductId 키를 사용해 실제 상품 ID 값을 화면에 표시합니다. */}
      <p>{params.ProductId}</p>
    </section>
  );
};

export default ProductDetail;
