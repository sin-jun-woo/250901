import logo from "./logo.svg";
import "./App.css";
// react-router-dom 라이브러리에서 라우터 생성 및 적용에 필요한 함수들을 가져옵니다.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 각 경로에 따라 보여줄 컴포넌트들을 import 합니다.
import RootElement from "./components/RootElement"; // 공통 레이아웃 컴포넌트
import Welcome from "./components/Welcome"; // 환영 페이지 컴포넌트
import Products from "./components/Products"; // 상품 목록 페이지 컴포넌트
import ProductDetail from "./components/ProductDetail"; // 상품 상세 페이지 컴포넌트
import ErrorPage from "./components/ErrorPage"; // 에러 발생 시 보여줄 페이지 컴포넌트

// createBrowserRouter 함수를 사용해 라우팅 규칙을 정의합니다.
// 이 규칙은 객체들의 배열 형태로 구성됩니다.
const router = createBrowserRouter([
  {
    // 최상위 경로('/')에 대한 설정
    path: "/",
    // 이 경로에 접속했을 때 렌더링될 기본 레이아웃 컴포넌트입니다.
    // 이 컴포넌트 안에는 보통 헤더, 푸터, 그리고 자식 라우트를 보여줄 <Outlet />이 포함됩니다.
    element: <RootElement />,
    // 이 경로 또는 하위 경로에서 에러(예: 페이지를 찾을 수 없음)가 발생했을 때 보여줄 컴포넌트입니다.
    errorElement: <ErrorPage />,
    // 중첩(Nested) 라우트를 정의합니다.
    // 여기에 정의된 컴포넌트들은 부모(RootElement)의 <Outlet /> 위치에 렌더링됩니다.
    children: [
      {
        // '/welcome' 경로에 대한 설정
        path: "/welcome",
        // 사용자가 '/welcome' 주소로 접속하면 <Welcome /> 컴포넌트를 보여줍니다.
        element: <Welcome />,
      },
      {
        // '/products' 경로에 대한 설정
        path: "/products",
        // 사용자가 '/products' 주소로 접속하면 <Products /> 컴포넌트를 보여줍니다.
        element: <Products />,
      },
      {
        // 동적(Dynamic) 경로 설정입니다. ':ProductId'는 URL 파라미터를 의미합니다.
        // 예를 들어, '/products/p1', '/products/abc' 등 모든 패턴에 매칭됩니다.
        path: "/products/:ProductId",
        // 해당 경로로 접속하면 <ProductDetail /> 컴포넌트를 보여줍니다.
        // 이 컴포넌트 내에서는 useParams 훅을 사용해 'ProductId' 값을 가져올 수 있습니다.
        element: <ProductDetail />,
      },
    ],
  },
]);

// 메인 App 컴포넌트
function App() {
  // RouterProvider를 사용해 위에서 정의한 라우터(router) 설정을 앱 전체에 적용합니다.
  return <RouterProvider router={router} />;
}

export default App;
