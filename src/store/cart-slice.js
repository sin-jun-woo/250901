import { createSlice } from "@reduxjs/toolkit";

// Thunk Action Creator: 비동기 작업을 처리하기 위한 함수를 반환하는 함수입니다.
// 컴포넌트에서는 dispatch(fetchCartData()) 형태로 사용합니다.
export const fetchCartData = () => {
  // Redux Thunk 미들웨어는 이 async 함수를 실행하고, dispatch 함수를 인자로 전달해줍니다.
  return async (dispatch) => {
    // 실제 데이터 fetching 로직을 담당하는 내부 함수
    const fetchData = async () => {
      const response = await fetch(
        "https://react-test-ea2ae-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET", // 데이터를 가져오므로 GET 메서드 사용
        }
      );
      // 응답이 성공적이지 않으면 에러를 발생시킵니다.
      if (!response.ok) {
        throw new Error("실패");
      }
      // 응답 본문을 JSON 형태로 파싱합니다.
      const data = await response.json();

      return data;
    };
    try {
      // fetchData 함수를 호출하여 서버로부터 장바구니 데이터를 가져옵니다.
      const cartData = await fetchData();
      // 가져온 데이터로 Redux 상태를 교체하기 위해 replaceCart 액션을 디스패치합니다.
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      // 에러 발생 시 콘솔에 "error message"를 출력합니다.
      console.error("error message");
    }
  };
};

// Thunk Action Creator: 장바구니 데이터를 서버에 전송합니다.
// 컴포넌트에서는 dispatch(sendCartData(cart)) 형태로 사용합니다.
export const sendCartData = (cart) => {
  // Redux Thunk 미들웨어는 이 async 함수를 실행하고, dispatch 함수를 인자로 전달해줍니다.
  return async (dispatch) => {
    // 실제 데이터 전송 로직을 담당하는 내부 함수
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-test-ea2ae-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT", // PUT 메서드는 해당 경로의 데이터를 통째로 교체합니다.
          body: JSON.stringify(cart), // JavaScript 객체를 JSON 문자열로 변환하여 body에 담아 보냅니다.
        }
      );
      // 응답이 성공적이지 않으면 에러를 발생시킵니다.
      if (!response.ok) {
        throw new Error("실패");
      }
    };
    try {
      // sendRequest 함수를 호출하여 서버에 데이터를 보냅니다.
      await sendRequest();
    } catch (error) {
      // 에러 발생 시 콘솔에 "error message"를 출력합니다.
      console.error("error message");
    }
  };
};

// createSlice: Redux 상태, 리듀서, 액션 생성자를 한 번에 정의하는 유용한 함수입니다.
const cartSlice = createSlice({
  // 슬라이스의 이름. 액션 타입의 접두사로 사용됩니다. (예: 'cart/addItemToCart')
  name: "cart",
  // 이 슬라이스의 초기 상태
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  // 동기적인 액션을 처리하는 리듀서 모음
  // Redux Toolkit은 내부적으로 Immer 라이브러리를 사용하므로,
  // state를 직접 수정하는 것처럼 보이는 코드(예: state.items.push)를 작성할 수 있습니다.
  reducers: {
    // 장바구니 전체를 교체하는 리듀서 (주로 앱 시작 시 데이터 로딩에 사용)
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    // 장바구니에 아이템을 추가하는 리듀서
    addItemToCart(state, action) {
      /*TODO- 여기에 코드를 작성해 주세요*/
      // 액션과 함께 전달된 새로운 아이템
      const newItem = action.payload;
      // 장바구니에 이미 같은 아이템이 있는지 확인
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // 총수량을 1 증가시킵니다.
      state.totalQuantity++;
      // 장바구니에 없는 새로운 아이템인 경우
      if (!existingItem) {
        // items 배열에 새로운 아이템 객체를 추가합니다.
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        // 이미 있는 아이템인 경우, 수량과 총 가격만 업데이트합니다.
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    // 장바구니에서 아이템을 제거하는 리듀서
    removeItemFromCart(state, action) {
      /*TODO- 여기에 코드를 작성해 주세요*/
      // 제거할 아이템의 id
      const id = action.payload;
      // 장바구니에서 해당 아이템을 찾습니다.
      const existingItem = state.items.find((item) => item.id === id);
      // 총수량을 1 감소시킵니다.
      state.totalQuantity--;
      // 아이템의 수량이 1개인 경우, 장바구니 목록에서 완전히 제거합니다.
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // 아이템이 여러 개 있는 경우, 수량을 1 줄이고 총 가격을 업데이트합니다.
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

// createSlice가 자동으로 생성한 액션 생성자들을 export 합니다.
// 컴포넌트에서 dispatch(cartActions.addItemToCart(item))와 같이 사용됩니다.
export const cartActions = cartSlice.actions;

// 슬라이스 자체를 export 합니다. 스토어 설정(configureStore)에서 reducer를 등록할 때 사용됩니다.
export default cartSlice;
