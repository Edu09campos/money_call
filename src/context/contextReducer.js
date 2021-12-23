const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE":
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    case "CREATE":
      transactions = [action.payload, ...state];

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    case "DELETE_ALL":
      transactions = [];

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
