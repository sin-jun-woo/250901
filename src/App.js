import { useDispatch, useSelector } from "react-redux";
//
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
// Redux Toolkit의 Thunk Action 생성자들을 import 합니다.
// 이 함수들은 비동기 로직(API 요청 등)을 처리하는 데 사용됩니다.
import { fetchCartData, sendCartData } from "./store/cart-slice";

// 이 변수는 useEffect가 처음 마운트될 때 실행되는 것을 방지하기 위한 '플래그'입니다.
// 컴포넌트가 리렌더링 되어도 초기화되지 않도록 컴포넌트 외부에 선언합니다.
let isInitial = true;

function App() {
  // useSelector 훅을 사용해 Redux 스토어의 상태(state)에 접근합니다.
  // state.ui.cartIsVisible 값을 가져와 showCart 변수에 저장합니다.
  // 이 값에 따라 장바구니 UI를 보여주거나 숨깁니다.
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  // 스토어에서 'cart' 상태 전체를 가져옵니다.
  // 이 객체에는 장바구니에 담긴 상품 목록, 총수량 등이 포함됩니다.
  const cart = useSelector((state) => state.cart);
  // useDispatch 훅을 사용해 Redux 스토어에 액션을 보낼 수 있는 dispatch 함수를 가져옵니다.
  const dispatch = useDispatch();

  // 이 useEffect는 컴포넌트가 처음 마운트될 때 한 번만 실행됩니다.
  // (의존성 배열에 있는 dispatch 함수는 React에 의해 변경되지 않음이 보장됩니다.)
  // 앱이 시작될 때 백엔드에서 장바구니 데이터를 불러오는 역할을 합니다.
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // 이 useEffect는 'cart' 상태가 변경될 때마다 실행됩니다.
  useEffect(() => {
    // 앱이 처음 로드되었을 때는 이 로직을 실행하지 않습니다.
    // 만약 이 코드가 없으면, 앱 시작 시 초기 상태의 cart로 백엔드 데이터를 덮어쓸 수 있습니다.
    if (isInitial) {
      isInitial = false; // 플래그를 false로 바꿔 다음부터는 아래 로직이 실행되도록 합니다.
      return; // 함수 실행을 중단합니다.
    }

    // cart 상태가 변경되면(예: 상품 추가), sendCartData Thunk를 디스패치합니다.
    // sendCartData는 현재 cart 상태를 인자로 받아 백엔드 API로 PUT/POST 요청을 보냅니다.
    dispatch(sendCartData(cart));
  }, [cart, dispatch]); // cart 상태가 바뀔 때마다 이 effect가 다시 실행됩니다.

  // 주석 처리된 이전 코드:
  // 이 로직은 sendCartData Thunk로 분리되기 전의 형태입니다.
  // 컴포넌트 내에서 직접 fetch API를 호출하는 대신,
  // Redux Thunk를 사용하면 비동기 로직을 컴포넌트와 분리하여 더 깔끔하게 관리할 수 있습니다.
  // useEffect(() => {
  //   fetch("https://react-test-ea2ae-default-rtdb.firebaseio.com/cart.json", {
  //     method: "PUT",
  //     body: JSON.stringify(cart),
  //   });
  // }, [cart]);

  return (
    <Layout>
      {/* showCart가 true일 때만 Cart 컴포넌트를 렌더링합니다. */}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
