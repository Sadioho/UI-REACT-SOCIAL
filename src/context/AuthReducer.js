const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
        isLogin: false,
      };
    case 'LOGIN_SUCCESS':
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        isLogin: true,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: action.payload,
        isLogin: false,
      };
    case 'FOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case 'UNFOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
