import axios from "axios";

export function addToCart (item,quantity) {
    item.quantity = Number(quantity)
    item.total = quantity * item.retailPrice
    console.log(item)
    return {
        type: "ADD_TO_CART",
        item:item
      };
}

export function removeFromCart (id) {
    console.log(id)
    return {type:"REMOVE_FROM_CART",payload:id}
      
}
export function removeCart (id) {
    console.log(id)
    return {type:"REMOVE_CART",payload:id}
      
}
export function deleteOrder (id) {
    return (dispatch) => {
        axios.delete(`https://heir-shoes-be.herokuapp.com/orders/${id}`)
  .then(res => {
      console.log(res.data)
      dispatch({type:"DELETE_ORDER",payload:id})
      
    })

    }
      
}
// export function getOrders () {
//     let data = {type:"ORDERS",}
 
//     axios
//       .get(
//         `http://localhost:5000/orders/${localStorage.getItem("id")}`,
//         {
//           headers: {
//             "accept": "application/json"
//           }
//         }
//       )
//       .then((response) => {
//         localStorage.setItem("Orders",JSON.stringify(response.data )) 
//      data.payload = response.data 
//      console.log(data)
//       })
//       console.log(data)
//       return data
      
// }
export function getOrders () {
    
    return (dispatch) => {
        
        axios.get(`https://heir-shoes-be.herokuapp.com//orders/${localStorage.getItem("id")}`)
  .then(res => {
      console.log(res.data)
      dispatch({type:"ORDERS",payload:res.data})
      
    })

    }
}


