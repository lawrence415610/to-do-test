import { useReducer } from "react";
import TodoContext from "./todoContext";

const initialState = {
  items: [],
};

const todoReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }
  if (action.type === "DELETE") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
    };
  }

  if (action.type === "TOGGLE") {
    const updatedItems = state.items.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
    return {
      items: updatedItems,
    };
  }

  if (action.type === "SET") {
    return {
      items: action.items,
    };
  }

  return initialState;
};

const TodoProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, initialState);

  const addItemHandler = (item) => {
    dispatchTodoAction({ type: "ADD", item: item });
  };

  const deleteItemHandler = (id) => {
    dispatchTodoAction({ type: "DELETE", id: id });
  };

  const toggleItemHandler = (id) => {
    dispatchTodoAction({ type: "TOGGLE", id: id });
  };

  const setItemsHandler = (items) => {
    dispatchTodoAction({ type: "SET", items: items });
  };

  const todoContext = {
    items: todoState.items,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    toggleItem: toggleItemHandler,
    setItems: setItemsHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
