import { useParams } from "react-router";
import { useContext } from "react";
import TodoContext from "../store/todoContext";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const todoCtx = useContext(TodoContext);
  const items = todoCtx.items;
  let { id } = useParams();
  const item = items.find((item) => item.id === id);
  return (
    <div>
      <h1>Detail Page</h1>
      <Link to="/todo">Back</Link>
      <h2>{item.description}</h2>
      <p>{item.category}</p>
      <p>{item.content}</p>
    </div>
  );
};

export default DetailPage;
