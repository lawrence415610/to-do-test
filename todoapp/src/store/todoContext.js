import { createContext } from 'react';

const TodoContext = createContext({
    items: [],
    addItem: (item) => {},
    deleteItem: (id) => {},
    toggleItem: (id) => {},
});

export default TodoContext;