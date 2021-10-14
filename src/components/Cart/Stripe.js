import React from "react";
import axios from "axios";
import { connect } from "react-redux";
// import { purchase } from "../actions/StoreActions";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import {removeCart} from '../../actions/actions'
import Loader from "react-loader-spinner";
// toast.configure;
const mapStateToProps = () => {
  return {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).cart : [],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeCart: (item) => {
      dispatch(removeCart(item));
    }
  };
};
function Stripe(props) {
  console.log(props.total)
  console.log(Number((Number(localStorage.getItem("total")) + Number(4.99) + Number(localStorage.getItem("total") * 0.07)).toFixed(2)))
  const [product] = React.useState({
    name: "$" + props.total,
    price: props.total
  })
// const purchaseAll = () => {
//     console.log(props.cart)
//     props.cart.map((shoe,i) => {
//       shoe.index = i
//       shoe.user_id = Number(localStorage.getItem("id"))
//       shoe.price = shoe.retailPrice
//       shoe.img = shoe.media.smallImageUrl
//       shoe.name = shoe.title
//       shoe.product_id = shoe.id;
//       shoe.email = localStorage.getItem("email");
//       shoe.street =
//         info.billing_address_line1 +
//         info.billing_address_state +
//         info.billing_address_zip;
//         shoe.city = info.shipping_address_city;
//         shoe.country = info.shipping_address_country;
//         shoe.delivered = false;
//         shoe.date_ordered = new Date();
      

//     })
    
//   };
  async function handleToken(token, address) {
    const response = await axios.post("https://heir-shoes-be.herokuapp.com/checkout",
      {
        token,
        product
      }
    );
    const { status } = response.data;
    
    if (status === "success") {
      console.log(address);
      purchaseCartItems(address);
    } else {
      toast("Failed, please try again", { type: "error" });
    }
    console.log(response.data);
  }
  const purchaseCartItems = (info) => {
    props.cart.forEach((item,i) => {
      console.log(item)
      const product = {}
      product.index = i
      product.user_id = Number(localStorage.getItem("id"))
      product.price = item.retailPrice
      product.img = item.media.smallImageUrl
      product.name = item.title
      product.product_id = item.id;
      product.email = localStorage.getItem("email");
      product.street =
        info.billing_address_line1 +
        info.billing_address_state +
        info.billing_address_zip;
        product.city = info.shipping_address_city;
        product.country = info.shipping_address_country;
        product.delivered = false;
        product.date_ordered = new Date();
        axios.post("https://heir-shoes-be.herokuapp.com/orders", product).then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err))
    });
    localStorage.setItem("cart",[])
    localStorage.setItem("total",0)
    props.removeCart()
  };
  return (
    <>
    {
      !props.total ?
      <div style={{"width":"800px", "margin":"0 auto"}}>
    <Loader type="Puff" color="#00BFFF" /> 
    <p>Loading Sneakers</p>
    </div>
    :
    <div className="container">
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={handleToken}
        amount={props.total * 100}
        billingAddress
        shippingAddress
        name={`$ ${props.total} `}
      />
      </div>
    }
    </>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(Stripe);
