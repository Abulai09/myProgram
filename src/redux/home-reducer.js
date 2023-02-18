import { request } from "../DAL/DAL"

let initialState = {
  posts:[
    {post:"hello world"},
    {post:"hello everyone!!!"},
  ],
  profile:[],
  isFetching:false
}

export let addPostAC = (post) => ({type:"addPost",post})
 let setProfileAC = (profile) => ({type:"setProfile",profile})
 let isFetchingAC = (isFetching) => ({type:"setisFetching",isFetching})

let homeReducer = (state=initialState,action) => {
  switch(action.type){
    case "setisFetching":
      return{
        ...state,
        isFetching:action.isFetching
      }
    case "setProfile":
      return{
        ...state,
        profile:action.profile
      }
    case "addPost":
      let newPost = { post:action.post }
      return{
        ...state,
        posts:[...state.posts,newPost]
      }
    default:
      return state
  }
}

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    dispatch(isFetchingAC(true))
    request.profile(userId).then( response => {
      dispatch(setProfileAC(response.data))
      dispatch(isFetchingAC(false))
    } ) 
  }
}

export default homeReducer