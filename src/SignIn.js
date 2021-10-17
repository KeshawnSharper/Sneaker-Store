import React,{useState} from 'react'
import './SignIn.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function SignIn(props) {
   const [user,setUser] = useState({
       email:"",
       password:""
   })
   const [error,setError] = useState({})
   const [loading,setLoading] = useState(false)
   const handleChange = e => {
       setUser({...user,
        [e.target.name]:e.target.value})
        console.log(user)
   }
   const handleSubmit = e => {
       e.preventDefault()
       setLoading(true)
   axios.post(`https://heir-shoes-be.herokuapp.com/login`,user).then(
       res => {
        setLoading(false)
        localStorage.setItem(`email`,res.data.email)
        localStorage.setItem(`token`,res.data.token)
        localStorage.setItem(`id`,res.data.id)
        props.history.push(`/home`)
        console.log(props)

       }
   )
   .catch(
    err => {
      setError({...error,message:err.response.data.message})
      setLoading(false)
      console.log(err)
    }
  )

   

}
  return (
    <div>
      {  
      loading 
      ?
      <div style={{"width":"800px", "margin":"0 auto"}}>
    <Loader type="Puff" color="#00BFFF" /> 
    <p>Authenicating...</p>
    </div>
    :
    <div className="main">
      <p className="sign" align="center">Sign in</p>
      <form className="form1">
      <p style={{"textAlign":"center","color": "#d53369"}}>{error.message}</p>
        <input className="un " onChange={handleChange} name="email"type="text" align="center" placeholder="Email" />
        <input className="pass" onChange={handleChange} name="password"type="password" align="center" placeholder="Password" />
        <button className="submit" align="center" onClick={handleSubmit}>Sign in</button>
        <Link to="/signup"><p className="forgot" align="center">Sign Up</p></Link>
    </form>
    </div>
}
    </div>
  )
}