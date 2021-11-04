import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';
const INITIAL_STATE = {
  user: {
    _id:"617f4bca4fdd3a0fca057424",
    username:"Xanh1",
    email:"xan1@gmail.com",
    profilePicture:"person/1.jpeg",
    coverPicture:"",
    isAdmin:false,
    followers:[],
    followings:[]
  },
  isFetching: false,
  error: false,
  isLogin: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        isLogin: state.isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
