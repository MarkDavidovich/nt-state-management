import { useReducer } from "react";
import { cartReducer, initialCart } from "../store/shopping-cart-reducer";

export function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", data: product });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", data: id });
  };

  return (
    <div>
      <h2>
        Shopping Cart ({state.itemCount} items) - Total: ${state.total.toFixed(2)}
      </h2>
      <button onClick={() => addItem({ name: "Snack", price: 4.5 })}>Add Snack</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
