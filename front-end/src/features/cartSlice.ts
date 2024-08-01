import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductWhite from "../Img/ProductImages/ProductWhite.webp"
import ProductBlue from "../Img/ProductImages/ProductBlue.webp"
import ProductPurple from "../Img/ProductImages/ProductPurple.webp"
import ProductBlack from "../Img/ProductImages/ProductBlack.webp"
import ProductTurquoise from "../Img/ProductImages/ProductTurquoise.webp"

interface CartItem {
  color: string;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [    {
    color: "white",
    imageUrl: ProductWhite,
    quantity: 0
},
{
    color: "blue",
    imageUrl: ProductBlue,
    quantity: 0
},
{
    color: "purple",
    imageUrl: ProductPurple,
    quantity: 0
},
{
    color: "black",
    imageUrl: ProductBlack,
    quantity: 0
},
{
    color: "turquoise",
    imageUrl: ProductTurquoise,
    quantity: 0
}],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((item) => item.color === action.payload.color);
      if (item) {
        if(item.quantity + action.payload.quantity > 10) {
          alert("Maximum quantity for each color is 10")
        }
        item.quantity = Math.min(item.quantity + action.payload.quantity, 10);
      } else {
        state.items.push(action.payload);
      }
    },
    updateItemQuantity(state, action: PayloadAction<{ color: string; quantity: number }>) {
      const { color, quantity } = action.payload;
      const item = state.items.find(item => item.color === color);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItemToCart, updateItemQuantity } = cartSlice.actions;

// Selector to get cart items
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

// Selector to get product colors
export const selectProductColors = (state: { cart: CartState }) => state.cart.items.map(item => ({
  color: item.color,
  imageUrl: item.imageUrl,
  quantity: item.quantity,
}));

export const selectTotalQuantity = (state: { cart: CartState }) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
