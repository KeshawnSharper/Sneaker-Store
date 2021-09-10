import React from "react"
import { Route,Redirect } from 'react-router-dom'
const ProtectedRoute = props => {
    const {
        component:Component,...rest} = props
    
    return (
<Route {...rest} render={(renderProps) => {
if (localStorage.getItem("token") && localStorage.getItem("token") !== "undefined"){
    return <Component {...renderProps}/>
}else{
    return  <Redirect to="/signin"/>
}
}}/>
    )
}
export default ProtectedRoute