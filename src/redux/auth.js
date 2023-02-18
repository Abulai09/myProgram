import { stopSubmit } from "redux-form"
import { request } from "../DAL/DAL"

let initialState = {
  id:null,
  email:null,
  login:null,
  isAuth:false
}

let authMeAC = (id,email,login,isAuth) => ({type:"authMe",id,email,login,isAuth})

let authReducer = (state=initialState,action) => {
  switch(action.type){
    case "authMe":
      return{
        ...state,
        id:action.id,
        email:action.email,
        login:action.login,
        isAuth:true
      }
    default:
      return state
  }
}

export let authMeThunk = () => {
  return (dispatch) => {
    request.auth().then( response => {
      if(response.data.resultCode === 0){
        let {id,email,login} = response.data.data
        dispatch(authMeAC(id,email,login,true))
      }
    } )
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    request.loginn(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(authMeThunk());
      } else {
        let messages =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Invalid passoword or email";
        dispatch(stopSubmit("login", { _error: messages }));
      }
    });
  };
};
export const logOut = () => {
  return (dispatch) => {
    request.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(authMeAC(null, null, null, false));
      }
    });
  };
};

export default authReducer