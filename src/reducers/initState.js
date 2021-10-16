const initState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[],
  user: {},
  total: 0,
  orders: []
};
export default initState;
