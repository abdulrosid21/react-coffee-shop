export const addMenusToCart = (cart) => ({
  type: "ADD_TO_CART",
  payload: cart,
});

export const removeFromCart = (cart) => ({
  type: "REMOVE_FROM_CART",
  payload: cart,
});
export const addQty = (cart) => ({
  type: "ADD_CART_QTY",
  payload: cart,
});

export const minusQty = (cart) => ({
  type: "MINUS_CART_QTY",
  payload: cart,
});
