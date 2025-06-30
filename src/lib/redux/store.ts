import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { setInitialCart } from "./cartSlice";
import type { CartItem } from "./cartSlice";

const saveToLocalStorage = (state: { cart: { items: CartItem[] } }): void => {
  try {
    const serializedState = JSON.stringify(state.cart.items);
    console.log(serializedState);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save state to local storage", e);
  }
};

const loadFromLocalStorage = (): CartItem[] => {
  try {
    const serializedState = localStorage.getItem("cart");
    console.log(serializedState);
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from local storage", e);
    return [];
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  // The preloadedState is set here but dispatched below for client-side hydration
});

// Hydrate store on client
if (typeof window !== "undefined") {
  const persistedCart = loadFromLocalStorage();
  store.dispatch(setInitialCart(persistedCart));
}

store.subscribe(() => saveToLocalStorage(store.getState()));

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
