import React from "react";

// ErrorPage는 라우팅 오류가 발생했을 때 사용자에게 보여줄 UI를 정의하는 간단한 함수형 컴포넌트입니다.
const ErrorPage = () => {
  // 현재는 "This is an error page!!"라는 고정된 텍스트를 포함하는 <div> 요소를 반환합니다.
  // 어떤 종류의 에러가 발생하든 이 동일한 화면이 보이게 됩니다.
  return <div>This is an error page!!</div>;
};

// 다른 파일(예: App.js)에서 이 컴포넌트를 import하여 사용할 수 있도록 export 합니다.
export default ErrorPage;
