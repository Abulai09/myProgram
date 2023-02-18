import React from "react";
import { connect } from "react-redux";
import { authMeThunk, logOut } from "../../redux/auth";
import Header from "./header";

class HeaderContainer extends React.Component{

  componentDidMount(){
    this.props.authMeThunk()

  }
    render(){
    return(
      <Header logOut={this.props.logOut} isAuth={this.props.isAuth} email={this.props.email}/>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    email:state.auth.email,
    isAuth:state.auth.isAuth
  }
}


export default connect(mapStateToProps,{authMeThunk,logOut})(HeaderContainer)