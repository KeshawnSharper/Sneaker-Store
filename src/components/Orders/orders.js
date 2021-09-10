import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../header/header'
import {getOrders,deleteOrder } from '../../actions/actions'
import { connect } from "react-redux";

 function Orders(props) {
    useEffect(() => {
      props.getOrders()

    },[props])
    return (
        <div>
        <Header />
        <div className="wrap cf">
        <h1 className="projTitle">My History</h1>
        <div className="heading cf">
          <h1>Orders</h1>
          <Link to="/shop" className="continue">Continue Shopping</Link >
        </div>
        <div className="cart">
          <ul className="cartWrap">
            
              {props.orders.map(
                  sneaker => (
<li className="items odd">
              <div className="infoWrap"> 
                <div className="cartSection">
                  <img src={sneaker.img} alt="" className="itemImg" />
                  <p className="itemNumber">{sneaker.date_ordered }</p>
                  <h3>{sneaker.name}</h3>
                  <h3>{sneaker.street}</h3>
                  {/* <p className="stockStatus"> In Stock</p> */}
                </div>  
                <div className="prodTotal cartSection">
                  <p>${sneaker.price}</p>
                </div>
                <div className="cartSection removeWrap" onClick={e => props.deleteOrder(sneaker.id)}>
                  <button className="remove">x</button>
                </div>
              </div>
            </li>
                  )
              )}
            
            
           
           
            {/*<li class="items even">Item 2</li>*/}
          </ul>
        </div>
      </div>
      </div>
    )
            }
            function mapStateToProps(state) {
                return {
                  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).cart : [],
                  total: localStorage.getItem("total") ? localStorage.getItem("total") :0,
                  orders : state.orders
                };
              }
             
              const mapDispatchToProps = (dispatch) => {
                return {
                  getOrders: () => {
                    dispatch(getOrders());
                  },
                  deleteOrder: (id) => {
                    dispatch(deleteOrder(id));
                  }
                }
              }
              

              export default connect(mapStateToProps,mapDispatchToProps)(Orders);