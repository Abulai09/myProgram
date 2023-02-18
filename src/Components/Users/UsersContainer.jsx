import React from "react";
import { connect } from "react-redux";
import { FollowThunk, getUsersThunk, setCurrentPageAC, UnFollowThunk } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component{

  componentDidMount(){
    this.props.getUsersThunk(this.props.currentPage,5)
  }

  onPageChanged = (n) => {
    this.props.setCurrentPageAC(n)
    this.props.getUsersThunk(n,5)
  }

  render(){
    return(
      <div>
        { this.props.isFetching && <h1>Loading...</h1>  }
        <Users UnFollowThunk={this.props.UnFollowThunk} FollowThunk={this.props.FollowThunk} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount} users={this.props.users}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    users:state.UsersPage.users,
    currentPage:state.UsersPage.currentPage,
    totalUsersCount:state.UsersPage.totalUsersCount,
    isFetching:state.UsersPage.isFetching
  }
}

export default connect(mapStateToProps,{getUsersThunk,setCurrentPageAC,FollowThunk,UnFollowThunk})(UsersContainer)