import { request } from "../DAL/DAL";

let initialState = {
  users: [],
  totalUsersCount: null,
  currentPage: 1,
  isFetching:false
};

let isFetchingAC = (isFetching) => ({type:"setisFetching",isFetching})
export let getUsersAC = (users) => ({ type: "getUsers", users });
export let setCurrentPageAC = (currentPage) => ({
  type: "setCurrentPage",
  currentPage,
});
export let settotalUsersCountAC = (totalUsersCount) => ({
  type: "settotalUsersCount",
  totalUsersCount,
});
let FollowAC = (userId) => ({ type: "Follow", userId });
let UnFollowAC = (userId) => ({ type: "UnFollow", userId });

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setisFetching":
      return{
        ...state,
        isFetching:action.isFetching
      }
    case "getUsers":
      return {
        ...state,
        users: action.users,
      };

    case "Follow":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case "UnFollow":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case "setCurrentPage":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "settotalUsersCount":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    default:
      return state;
  }
};

export let getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(isFetchingAC(true))
    request.getUsers(currentPage, pageSize).then((response) => {
      dispatch(getUsersAC(response.data.items));
      dispatch(settotalUsersCountAC(response.data.totalCount));
      dispatch(isFetchingAC(false))
    });
  };
};

export let FollowThunk = (userId) => {
  return (dispatch) => {
    request.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(FollowAC(userId));
      }
    });
  };
};

export let UnFollowThunk = (userId) => {
  return (dispatch) => {
    request.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(UnFollowAC(userId));
      }
    });
  };
};

export default usersReducer;
