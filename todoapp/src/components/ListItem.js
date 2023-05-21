import { Link } from "react-router-dom";
import style from "./ListItem.module.css";
import { useContext } from "react";
import TodoContext from "../store/todoContext";

const ListItem = ({ item }) => {
  const todoCtx = useContext(TodoContext);
  const handleDelete = (e) => {
    todoCtx.deleteItem(e.target.name); 
  };

  return (
    //
    <tr className={style["body__item"]}>
      <td>
        <input
          name={item.id}
          className={style["body__item-input"]}
          type="checkbox"
          onChange={() => todoCtx.toggleItem(item.id)}
          checked={item.isChecked}
        />
      </td>
      <td className={style["body__item-des"]}>
        <Link to={`/todo/${item.id}`}>{item.description}</Link>
      </td>
      <td className={style["body__item-type"]}>{item.category}</td>
      <td>
        <input
          name={item.id}
          onClick={handleDelete}
          className={style["body__item-operate"]}
          type="button"
          value="Delete"
        />
      </td>
    </tr>
  );
};

export default ListItem;
