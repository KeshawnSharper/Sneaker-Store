import React,{useState} from 'react'
import './SignIn.css'
import Axios from 'axios'
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";


export default function SignUp(props) {
   const [user,setUser] = useState({
       email:"",
       password:"",
       user_name:""
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
   Axios.post(`http://localhost:5000/register`,user).then(
       res => {
        Axios.post(`http://localhost:5000/login`,user).then(
       res => {
        localStorage.setItem(`email`,res.data.email)
        localStorage.setItem(`token`,res.data.token)
        localStorage.setItem(`id`,res.data.id)
        props.history.push(`/home`)
        console.log(props)
        setLoading(false)
       })
       }
   )
.catch(
    err => {
      setError({...error,message:err.response.data.message})
      setLoading(false)
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
      <p className="sign" align="center">Sign Up</p>
      <form className="form1">
        <p style={{"textAlign":"center","color": "#d53369"}}>{error.message}</p>
        <input className="un " onChange={handleChange} name="email"type="text" align="center" placeholder="Email" />
        <input className="pass" onChange={handleChange} name="user_name"type="userName" align="center" placeholder="Username" />
        <input className="pass" onChange={handleChange} name="password"type="password" align="center" placeholder="Password" />
        <button className="submit" align="center" onClick={(e) => handleSubmit(e)}>SignUp</button>
        <Link to="/signin"><p className="forgot" align="center">Sign In</p></Link>
    </form>
    </div>
      }
    </div>
  )
}