import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
      case "ADD_TO_CART":
      // Update total price of cart items
      // Subtract item base price + item quantity
      if (!localStorage.getItem("cart")) {
        let cart = {cart:[action.item]}
        localStorage.setItem("cart",JSON.stringify(cart)) 
            }
            else{
              let cart = JSON.parse(localStorage.getItem("cart"))
              cart.cart.push(action.item)
              localStorage.setItem("cart",JSON.stringify(cart)) 
              console.log(cart)
            }
            if (!localStorage.getItem("total")) {
              localStorage.setItem("total",action.item.retailPrice) }
                  else{
                    localStorage.setItem("total",Number(localStorage.getItem("total")) + Number(action.item.retailPrice)) 
                  }
      // let cart = JSON.parse(localStorage.getItem("cart")).cart
      console.log(localStorage.getItem("cart"))
      console.log(state.cart)
      // localStorage.setItem("cart",JSON.parse(localStorage.getItem("cart")).cart.push(action.item)) 
      // console.log(localStorage.getItem("cart"))
      return {
        ...state,
        cart:[...state.cart,action.item],
      }
      case "REMOVE_FROM_CART":
        // Update total price of cart items
        // Subtract item base price + item quantity
        let cart = JSON.parse(localStorage.getItem("cart"))
        console.log(action.payload !== cart.cart[0].id)
        // console.log(cart.cart[0].id)
        let index = cart.cart.find(sneaker => sneaker.id === action.payload)
        let price = index.retailPrice
        index = cart.cart.indexOf(index)
        console.log(index)
        cart.cart = cart.cart.filter((_,i) => (

          i !== index
                    ))
        localStorage.setItem("cart",JSON.stringify(cart)) 
        localStorage.setItem("total",Number(localStorage.getItem("total")) - Number(price)) 
        console.log(cart)
        return {
          ...state,
          cart:state.cart.filter(sneaker => (
sneaker.id !== action.payload
          )),
        };
        case "REMOVE_CART":
        // Update total price of cart items
        // Subtract item base price + item quantity
        let removed_cart = JSON.parse(localStorage.getItem("cart"))
        // console.log(cart.cart[0].id)
        
        removed_cart.cart = []
        localStorage.setItem("cart",JSON.stringify(removed_cart)) 
        localStorage.setItem("total",0) 
        return {
          ...state,
          cart:state.cart.filter(sneaker => (
sneaker.id !== action.payload
          )),
        };
        case "DELETE_ORDER":
          // Update total price of cart items
          // Subtract item base price + item quantity
          
          // console.log(cart.cart[0].id)
          
          // console.log(cart.cart[0].id)
          
          let orders_index = state.orders.find(sneaker => sneaker.id === action.payload)
          orders_index = state.orders.indexOf(orders_index)
          
          console.log(orders_index)
          console.log(state.orders.filter((_,i) => (
  
            i !== orders_index
                      )))
          return {
            ...state,
            orders:state.orders.filter((_,i) => (
  
              i !== orders_index
                        )),
          }
          case "ORDERS":
          return {
            ...state,
            orders:action.payload
          }
    default:
      return initState;
  }
};
