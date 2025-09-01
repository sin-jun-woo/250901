// React 라이브러리를 가져옵니다. JSX 문법을 사용하기 위해 필수적입니다.
import React from "react";

// 'Welcome'이라는 이름의 함수형 컴포넌트를 정의합니다.
const Welcome = () => {
  // 이 컴포넌트가 렌더링할 JSX(JavaScript XML)를 반환합니다.
  // 여기서는 "Hello Welcome"이라는 텍스트를 가진 <div> 요소를 반환합니다.
  return <div>Hello Welcome</div>;
};

// 다른 파일(예: App.js)에서 이 Welcome 컴포넌트를 import하여 사용할 수 있도록 export 합니다.
export default Welcome;
