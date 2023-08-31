import {createStore} from "redux";
import rootReducers from "./redurcers";


const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
    }
}

const store = createStore(rootReducers,initialState);

export default store;