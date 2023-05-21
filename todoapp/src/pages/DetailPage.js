import { useParams } from "react-router";
import { useContext } from "react";
import TodoContext from "../store/todoContext";
import { Link } from "react-router-dom";
import style from "./DetailPage.module.css";

const DetailPage = () => {
  const todoCtx = useContext(TodoContext);
  const items = todoCtx.items;
  let { id } = useParams();
  const item = items.find((item) => item.id === id);
  return (
    <main className={style.main}>
      <h1 className={style.title}>Todo Detail</h1>
      <Link to="/todo">Back To Todo List</Link>
      <h2>Todo Description</h2>
      <p>{item.description}</p>
      <h2>Todo Category</h2>
      <p>{item.category}</p>
      <h2>Todo Content</h2>
      <p>{item.content}</p>
    </main>
  );
};

export default DetailPage;
