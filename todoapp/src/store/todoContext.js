import { createContext } from 'react';

const TodoContext = createContext({
    items: [],
    addItem: (item) => {},
    deleteItem: (id) => {},
});

export default TodoContext;