import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import cartReducer from "./cartSlice";
import { persistReducer } from "redux-persist";

const createNoopStorage = () => {
  return {
    getItem: () => Promise.resolve(null),
    setItem: () => Promise.resolve(),
    removeItem: () => Promise.resolve(),
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const userPersistConfig = {
  key: "root",
  storage: storage,
  // whitelist: ["cart"],
};

export const persistedReducer = persistReducer(userPersistConfig, cartReducer);

// export default userPersistReducer;

// export const store = createStore(persistedReducer);
// export const persistor = persistStore(store);
