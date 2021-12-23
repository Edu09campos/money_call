import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => dispatch({ type: "DELETE", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "CREATE", payload: transaction });

  const deleteAllTransactions = () =>
    dispatch({ type: "DELETE_ALL", payload: 0 });

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        deleteAllTransactions,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
