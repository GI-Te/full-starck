import { createContext, useReducer } from "react";
import customersReducer from "../reducers/customersReducer";
import axios from "axios";

const initialState = {
  loading: true,
  customers: [],
  error: null,
};

export const CustomersContext = createContext();

const CustomersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customersReducer, initialState);
  //get all customers
  async function getCustomers() {
    const res = await axios.get(
      "https://atif-restaurant-api.herokuapp.com/api/v2/customers"
    );
    try {
      dispatch({
        type: "GET_ALL_CUSTOMERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CustomersContext.Provider
      value={{ getCustomers, customers: state.customers, loading: state.loading }}
    >
      {children}
    </CustomersContext.Provider>
  );
};

export default CustomersContextProvider;
