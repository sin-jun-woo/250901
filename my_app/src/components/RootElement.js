import React from "react";
// react-router-dom에서 Outlet 컴포넌트를 가져옵니다.
// Outlet은 중첩된 라우트(nested routes)의 자식 컴포넌트가 렌더링될 위치를 지정하는 'placeholder' 역할을 합니다.
import { Outlet } from "react-router-dom";
// 공통 헤더 컴포넌트를 가져옵니다.
import MainHeader from "./MainHeader";

// RootElement는 여러 페이지에서 공유되는 공통 레이아웃을 정의하는 컴포넌트입니다.
// App.js의 라우터 설정에서 이 컴포넌트를 부모로 사용하는 자식 경로들은
// 모두 이 레이아웃 안에서 보여지게 됩니다.
const RootElement = () => {
  return (
    // 최상위 div 요소입니다. React 컴포넌트는 일반적으로 단일 루트 요소를 반환합니다.
    <div>
      {/* MainHeader 컴포넌트를 렌더링합니다. 이 헤더는 모든 자식 페이지에 공통으로 표시됩니다. */}
      <MainHeader />
      {/* Outlet 컴포넌트가 위치한 곳입니다. */}
      {/* 현재 URL 경로에 따라 App.js에 정의된 자식 컴포넌트(예: Welcome, Products)가 이 자리에 렌더링됩니다. */}
      <Outlet />
    </div>
  );
};

// 다른 파일(App.js)에서 이 컴포넌트를 사용할 수 있도록 export 합니다.
export default RootElement;
