import React from "react";
import { connect } from "react-redux";
import { addPostAC } from "../../../redux/home-reducer";
import Post from "./Post";

class PostContainer extends React.Component{
  render(){
    return(
      <Post addPostAC={this.props.addPostAC} posts={this.props.posts}/>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    posts:state.HomePage.posts
  }
}

export default connect(mapStateToProps,{addPostAC})(PostContainer)