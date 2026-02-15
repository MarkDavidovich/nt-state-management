export const initialCart = {
  items: [],
  total: 0,
  itemCount: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, { ...action.data, id: Date.now() }],
        total: state.total + action.data.price,
        itemCount: state.itemCount + 1,
      };

    case "REMOVE_ITEM": {
      const currentItem = state.items.find((item) => item.id === action.data);
      if (!currentItem) return state;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.data),
        total: state.total - currentItem.price,
        itemCount: state.itemCount - 1,
      };
    }

    case "CLEAR_CART":
      return initialCart;

    default:
      return state;
  }
};
