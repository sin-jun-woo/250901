import React from "react";
// react-router-dom에서 NavLink 컴포넌트를 가져옵니다.
// NavLink는 현재 URL과 to prop이 일치할 때 특정 스타일이나 클래스를 적용할 수 있는 특별한 Link입니다.
import { NavLink } from "react-router-dom";

// 애플리케이션의 메인 헤더를 렌더링하는 컴포넌트입니다.
const MainHeader = () => {
  return (
    // 시맨틱한 HTML 구조를 위해 <header> 태그를 사용합니다.
    <header>
      {/* 내비게이션 링크들을 그룹화하기 위해 <nav> 태그를 사용합니다. */}
      <nav>
        <ul>
          <li>
            {/* '/welcome' 경로로 이동하는 링크입니다. */}
            {/* 사용자가 'welcome' 링크를 클릭하면 URL이 '/welcome'으로 변경되고, */}
            {/* react-router-dom이 해당 경로에 맞는 컴포넌트(Welcome.js)를 렌더링합니다. */}
            <NavLink to="/welcome">welcome</NavLink>
          </li>
          <li>
            {/* '/products' 경로로 이동하는 링크입니다. */}
            <NavLink to="/products">products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
