import react,{useState} from "react"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const QuantityBox = ({item,amount,addToCart}) => {
    const originalQuantity = amount
    const [quantity,setQuantity] = useState(amount)
    const handleQuantity = (props) => {
        if (props === "add"){
            setQuantity(quantity + 1)
        }
        else {
            setQuantity(quantity - 1)
        }
    }
    return(
        <>
        <ArrowLeftIcon onClick={() => handleQuantity("minus")} />
        <br></br>
        <input style={{"width":"25px","height":"25px"}} value={quantity} />
        <br></br>
        <ArrowRightIcon onClick={() => handleQuantity("add")} />
        {quantity !== originalQuantity ? <button className="continue" onClick={() => addToCart(item,quantity)}>Save Changes</button> : null }
        </>
    )
}
export default QuantityBox
