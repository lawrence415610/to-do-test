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
        const updatedItems = state.items.filter(item => item.id !== action.id);
        return {
            items: updatedItems,
        };
    }
    return initialState;
};

const TodoProvider = props => {
    const [todoState, dispatchTodoAction] = useReducer(todoReducer, initialState);

    const addItemHandler = item => {
        dispatchTodoAction({ type: "ADD", item: item });
    };

    const deleteItemHandler = id => {
        dispatchTodoAction({ type: "DELETE", id: id });
    };

    const todoContext = {
        items: todoState.items,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler,
    };

    return (
        <TodoContext.Provider value={todoContext}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;