import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

import axios from "axios";

const initialState = {
  isPending: true,
  user: {},
  error: null,
};

export const UserContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  //login a user
  async function loginUser(user) {
    const config = {
      headers: {
        "Context-Type": "application/json"
      }
    }
     const { data } = await axios.post(
        "https://atif-restaurant-api.herokuapp.com/api/v1/users/login",
        user,
        config
      );
      localStorage.setItem("userInfo", data);
      dispatch({
        type: "LOGIN_USER",
        payload: data,
      });
     
      console.log(data);
  }

  async function registerUser(newuser) {
    const config={
      headers:{
        "Content-type": "application/json"
      }
    }
    const {date} = await axios.post(
      " https://atif-restaurant-api.herokuapp.com/api/v1/users/register", 
    newuser,
    config
    );
  }
  return (
    <UserContext.Provider
      value={{ loginUser, user: state.user, isPending: state.isPending }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UsersContextProvider;
