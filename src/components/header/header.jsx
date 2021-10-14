import React, { useState,useEffect } from "react";
import SearchIcon from '../icons/search'
import styles from './header.module.css'
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewListIcon from '@material-ui/icons/ViewList';
function Header({props}) {
  const [value,setValue] = useState("")
  const handleChange = e => {
    setValue(e.target.value)
    console.log(value)
  }
  useEffect(() => {
    localStorage.setItem("component","Search" )
    console.log(localStorage.getItem("component"))
   
    // console.log(props)
    if(props){
      if(props.match){
        if(props.match.params){
          if(props.match.params.email){
        localStorage.setItem("id",props.match.params.id )
        localStorage.setItem("email",props.match.params.email )
        localStorage.setItem("token",props.match.params.token )
          }
      }
      
    }
  }
  },[props])

  // console.log(props.match)
return (
<header className={styles.header}>
    <div className={styles.innerHeader}>
      <Brand />
      <Search value={value} handleChange={handleChange}/>
      <div className={styles.shopping}>
      <Link style={{"margin-right":"9px"}} to={`/cart`}>
      <ShoppingCartIcon />
      <p style={{"fontSize":"9px"}}>Cart</p>
      </Link>
      </div>
     
      
      <Link to={`/orders`}>
      <ViewListIcon />
      <p style={{"fontSize":"9px"}}>Past Orders</p>
      </Link>
      
      {/* <User /> */}
    </div>
  </header>
)
}

const Search = ({value,handleChange}) => (
  <div className={styles.search}>
    {value === "" ? <Link to={`/shop`}><SearchIcon /> </Link>: <Link to={`/shop/${value}`}><SearchIcon /> </Link>}
    <input
      type="text"
      placeholder="Search ..."
      className={styles.searchInput}
      onChange={handleChange}
    />
  </div>
)

const Brand = () => (
  <Link to={`/home`} className={styles.brand}>
   <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
			<rect x="16.539" y="425.626" width="479.767" height="50%" transform="matrix(1,0,0,1,0,0)" fill="rgb(0,0,0)" /> 
				<path class="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 684.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "/>
				</svg> Heiir Feat
  </Link>
)

export default Header
