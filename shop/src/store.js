// state 를 저장하는 저장소

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let carts = createSlice({
  name: "carts",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Gray Yordan", count: 1 },
  ],
  reducers: {
    // 카트 수량 추가
    addCount(state, action) {
      // 사용자가 보낸 값을 가져올 때 (특정 상품만 수량 수정)
      let id = action.payload;

      // 장바구니에서 id 와 일치하는 상품 찾기
      let findProduct = state.find((cart) => cart.id == id);
      findProduct.count += 1;
    },
    // 카트 수량 빼기
    subTractCount(state, action) {
      let id = action.payload;
      // 장바구니에서 id 와 일치하는 상품 찾기
      let findProduct = state.find((cart) => cart.id == id);
      findProduct.count -= 1;
    },
    // 카트 추가
    addCart(state, action) {
      // 사용자가 선택한 제품과 수량 가져오기
      //   console.log(action.payload);
      //   console.log(action.payload.product);
      //   console.log(action.payload.amount);
      const product = action.payload.product;
      const amount = action.payload.amount;

      const item = { id: product.id, name: product.pname, count: Number(amount) };

      // 추가하기 전에 동일한 상품 아이디가 존재한다면 수량만 추가하기
      let idx = state.findIndex((cart) => cart.id == item.id);

      if (idx > -1) {
        // 이미 담겨져 있는 제품인 경우 수량만 추가
        state[idx].count += Number(amount);
      } else {
        // state 에 추가
        state.push(item);
      }
    },
    subCart(state, action) {
      let deleteItem = state.findIndex((cart) => cart.id == action.payload);
      state.splice(deleteItem, 1);
      // state.splice(삭제할아이템,1);
    },
  },
});

export let { addCount, subTractCount, addCart, subCart } = carts.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    carts: carts.reducer,
  },
});
