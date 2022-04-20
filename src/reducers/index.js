const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        favoritesProducts: [...state.favoritesProducts, action.payload]
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        favoritesProducts: state.favoritesProducts.filter(
          (item) => item.data.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
