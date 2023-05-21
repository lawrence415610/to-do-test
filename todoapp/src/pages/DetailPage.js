import { useParams } from "react-router";
import { useContext } from "react";
import TodoContext from "../store/todoContext";

const DetailPage = () => {
  const todoCtx = useContext(TodoContext);
  const items = todoCtx.items;
  let { id } = useParams();
  const item = items.find((item) => item.id === id);
  return (
    <div>
      <h1>{item.description}</h1>
      <p>{item.category}</p>
      <p>{item.content}</p>
    </div>
  );
};

export default DetailPage;
