import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./profile";
import WithRouterr from '../../withRouter/withRouter'
import { getProfileThunk } from "../../../redux/home-reducer";

class ProfileContainer extends React.Component{

  componentDidMount(){
    let user = this.props.params.id
    if(!user){
      user=25702
    }
    this.props.getProfileThunk( user )
  }

  render(){
    return(
      <div>
        { this.props.isFetching ? <h1>Loading...</h1> : <Profile profile={this.props.profile}/>    }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    profile:state.HomePage.profile,
    isFetching:state.HomePage.isFetching,
  }
}

export default  compose(
  connect(mapStateToProps,{getProfileThunk}),
  WithRouterr
)(ProfileContainer)