import { createContext } from 'react';

const TodoContext = createContext({
    items: [],
    addItem: (item) => {},
    deleteItem: (id) => {},
    toggleItem: (id) => {},
    setItems: (items) => {},
});

export default TodoContext;