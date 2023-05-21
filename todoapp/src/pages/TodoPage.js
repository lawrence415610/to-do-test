import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import style from "./TodoPage.module.css";
import { useState } from "react";

const TodoPage = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <main className={style.main}>
      <UserForm onItemAdd={addItem} />
      <UserList items={items} onItemDelete={deleteItem} />
    </main>
  );
};

export default TodoPage;
