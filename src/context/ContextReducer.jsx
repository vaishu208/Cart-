export const initialState = {
  cartItems: [],
};
export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existingItems = state.cartItem?.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItems) {
        return {
          ...state,
          cartItems: state.cartItems?.map((cartItems) =>
            cartItems.id === item.id
              ? { ...cartItems, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };
    }
    case "INCREMENT": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems?.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    }
    case "DECREMENT": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((items) =>
            item.id == id ? { ...item, quantity: item.quantity - 1 } : item,
          )

          .filter((item) => item.quantity > 0),
      };
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== id),
      };
    }
    default:
      return state;
  }
}
