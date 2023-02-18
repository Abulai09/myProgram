import { combineReducers, createStore,applyMiddleware  } from "redux";
import { reducer as formReducer } from 'redux-form'
import homeReducer from "./home-reducer";
import usersReducer from "./users-reducer";
import thunk from 'redux-thunk'
import authReducer from "./auth";


let reducers = combineReducers({
  HomePage:homeReducer,
  form:formReducer,
  UsersPage:usersReducer,
  auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunk))
window.store = store
export default store