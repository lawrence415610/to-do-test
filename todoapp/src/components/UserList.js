import ListItem from "./ListItem";
import style from "./UserList.module.css";
import { useContext } from "react";
import TodoContext from "../store/todoContext";
import Button from "./Button";

const UserList = () => {
  const todoCtx = useContext(TodoContext);
  let items = todoCtx.items;

  const handleAllChecked = (event) => {
    items.forEach((item) => (item.isChecked = event.target.checked));
    todoCtx.setItems(items);
  };

  const handleDeleteSelected = () => {
    items = items.filter((item) => !item.isChecked);
    todoCtx.setItems(items);
  }

  return (
    <div className={style.userlist}>
      <Button
        value="Delete Selected"
        type="button"
        onClick={handleDeleteSelected}
      />
      
      <table className={style["userlist__table"]}>
        <thead>
          <tr>
            <th>
              <input
                className={style["head__input"]}
                type="checkbox"
                onChange={handleAllChecked}
              />
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody className={style.tablebody}>
          {items.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
