import React,{useState} from "react"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const QuantityBox = ({item,amount,addToCart,cart=false}) => {
    const [quantity,setQuantity] = useState(cart ? amount : amount + 1)
    const handleQuantity = (props) => {
        if (props === "add"){
            setQuantity(quantity + 1)
        }
        else {
            setQuantity(quantity - 1)
        }
    }
    const addItem = () =>{
        addToCart(item,quantity)
        
    }
    return(
        <>
        <ArrowLeftIcon onClick={() => handleQuantity("minus")} />
        <br></br>
        <input style={{"width":"25px","height":"25px"}} value={quantity } />
        <br></br>
        <ArrowRightIcon onClick={() => handleQuantity("add")} />
        {quantity !== amount ? <button className="add-to-cart" onClick={addItem}>Save to Cart</button> : null }
        </>
    )
}
export default QuantityBox
