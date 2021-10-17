import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './cart.scss'
import Stripe from "./Stripe"
import Header from '../header/header'
import {addToCart, removeFromCart} from '../../actions/actions'
import { connect } from "react-redux";
import StripeDemoAlert from "./StripeDemoAlert";
import QuantityBox from "./QuantityBox";
 function Cart({cart,removeFromCart,addToCart}) {
   let [total,setTotal] = useState({})
   const getTotal = () => {
     let sub = 0
   if (cart){
     cart.map(a => sub += a.total)
     console.log(sub)
    }
    setTotal(
      {
      subtotal : sub.toFixed(2),
      total : Number((Number(sub) + Number(4.99) + Number(sub * 0.07))).toFixed(2)
    })
    console.log(total)
  }
  console.log(cart)

   useEffect(() => {
     localStorage.setItem("cart",JSON.stringify(cart))
      getTotal()
   },[cart])
     
     
    console.log(total)
    return (
        <div>
        <Header />
        <div className="wrap cf">
        <h1 className="projTitle">Shopping Cart</h1>
        <div className="heading cf">
          <h1>My Cart</h1>
          <Link to="/shop" className="continue">Continue Shopping</Link >
        </div>
        <div className="cart">
          <ul className="cartWrap">
              {cart.map(
                  sneaker => (
<li className="items odd">
              <div className="infoWrap"> 
                <div className="cartSection">
                  <img src={sneaker.media.smallImageUrl} alt="" className="itemImg" />
                  <p className="itemNumber">{sneaker.id }</p>
                  <Link to={`/product/${sneaker.id}`}><h3>{sneaker.title}</h3> </Link>
                  <div style={{"display":"inline-flex"}}>
                  <QuantityBox amount={sneaker.quantity} item={sneaker} addToCart={addToCart} cart={true}/>
                  
                  </div>
                </div>  
                <div className="prodTotal cartSection">
                  <p>${sneaker.total}</p>
                </div>
                <div className="cartSection removeWrap" onClick={e => removeFromCart(sneaker.id)}>
                  <button className="remove">x</button>
                </div>
              </div>
            </li>
                  )
              )}
            
            
           
           
            {/*<li class="items even">Item 2</li>*/}
          </ul>
        </div>
        <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
          <button className="btn">button</button></div>
        <div className="subtotal cf">
          <ul>
            <li className="totalRow"><span className="label">Subtotal</span><span className="value">${total.subtotal}</span></li>
            <li className="totalRow"><span className="label">Shipping</span><span className="value">$4.99</span></li>
            <li className="totalRow"><span className="label">Tax</span><span className="value">${(total.subtotal * 0.07).toFixed(2)}</span></li>
            <li className="totalRow final"><span className="label">Total</span><span className="value">{total.total}</span></li>
            {Number(total.subtotal) !== 0 ? <li className="totalRow"><StripeDemoAlert total={total.total}/></li> : null }
           {/* {Number(total.subtotal) !== 0 ? <li className="totalRow"><Stripe total={total.total} /></li> : null } */}
          </ul>
        </div>
      </div>
      </div>
    )
            }
            function mapStateToProps(state) {
                return {
                  cart: state.cart,
                }
              }
              const mapDispatchToProps = (dispatch) => {
                return {
                  addToCart: (item,quantity) => {
                    dispatch(addToCart(item,quantity))
                  },
                  removeFromCart: (id) => {
                    dispatch(removeFromCart(id))
                  }
              }
            }
export default connect(mapStateToProps,mapDispatchToProps)(Cart)