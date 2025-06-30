import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
  seller: string;
  selected?: boolean;
  slug?: string;
  attributes?: Record<string, string>;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

type TReducers = {
  setInitialCart(state: CartState, action: PayloadAction<CartItem[]>): void;
  addToCart(state: CartState, action: PayloadAction<CartItem>): void;
  removeFromCart(state: CartState, action: PayloadAction<string>): void;
  updateQuantity(state: CartState, action: PayloadAction<{ id: string; quantity: number }>): void;
  toggleItemSelection(state: CartState, action: PayloadAction<string>): void;
  toggleSelectAll(state: CartState, action: PayloadAction<boolean>): void;
  clearCart(state: CartState): void;
};

type TExtraReducers = {
  [K in keyof TReducers]: (state: CartState, action: ReturnType<TReducers[K]>) => void;
};

const cartSlice = createSlice<CartState, TReducers, "cart", TExtraReducers>({
  name: "cart",
  initialState,
  reducers: {
    setInitialCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push({ ...newItem, selected: true });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    toggleItemSelection: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.selected = !item.selected;
      }
    },
    toggleSelectAll: (state, action: PayloadAction<boolean>) => {
      state.items.forEach(item => {
        item.selected = action.payload;
      });
    },
    clearCart: state => {
      state.items = [];
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(setInitialCart, (state, action) => {
  //     state.items = action.payload;
  //   });
  // },
});

export const {
  setInitialCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleItemSelection,
  toggleSelectAll,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
