import React from "react";
// react-router-dom에서 Link 컴포넌트를 가져옵니다.
// Link는 브라우저의 페이지를 새로고침하지 않고, 애플리케이션 내에서 다른 경로로 이동시켜주는 역할을 합니다.
import { Link } from "react-router-dom";

// 상품 목록 페이지를 렌더링하는 컴포넌트입니다.
const Products = () => {
  return (
    // 컴포넌트의 최상위 JSX 요소입니다.
    <div>
      {/* 페이지의 한 구획을 나타내는 <section> 태그입니다. */}
      <section>
        {/* 내비게이션 링크들을 담는 <nav> 태그입니다. */}
        <nav>
          {/* 순서 없는 목록(ul)으로 상품 리스트를 만듭니다. */}
          <ul>
            <li>
              {/* '/products/p1' 경로로 이동하는 링크입니다. */}
              {/* 이 링크를 클릭하면 URL이 변경되고, App.js에 설정된 라우팅 규칙에 따라 ProductDetail 컴포넌트가 렌더링됩니다. */}
              <Link to="/products/p1">1번 상품</Link>
            </li>
            <li>
              {/* '/products/p2' 경로로 이동하는 링크입니다. */}
              <Link to="/products/p2">2번 상품</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

// 다른 파일에서 이 컴포넌트를 import하여 사용할 수 있도록 export 합니다.
export default Products;
