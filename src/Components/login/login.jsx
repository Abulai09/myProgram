import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth"
import { maxLength, required } from "../../utils/validate"
import Input from "../Input/Input"
import s from './login.module.css'
import { Checkbox } from 'antd';



let maxLength20 = maxLength(50)


const LoginForm = (props) =>{

    return(
        <div >
            <form onSubmit={props.handleSubmit}>
                <div><Field validate={[required,maxLength20]} component={Input} name={"email"} placeholder={"email"}/></div>
                <div><Field validate={[required,maxLength20]}  component={Input} name={"password"} placeholder={"Password"}/></div>
                <Checkbox>remember Me</Checkbox>
                {
                    props.error && <span className={s.err}>{props.error}</span>
                }
                <div><button>Login</button></div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)

const Login = (props) =>{
    
    let onSubmit = (formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }

    return(
        <div className={s.form}> 
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return{
      isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps,{login})(Login)