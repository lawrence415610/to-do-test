import ListItem from "./ListItem";
import style from "./UserList.module.css";
import { useState, useRef } from "react";

const UserList = ({ items, onItemDelete }) => {
  //   const [allchecked, setAllchecked] = useState(false);
  //   const [checkboxes, setCheckboxes] = useState([]);

  // check all the checkbox or uncheck all the checkbox
  //   const checkAll = () => {
  //     if (allchecked === false) {
  //       setAllchecked(true);
  //     } else {
  //       setAllchecked(false);
  //     }
  //   };

  //   const handleCheckboxChange = (id) => {
  //     const newCheckboxes = [...checkboxes];
  //     const index = newCheckboxes.indexOf(id);
  //     if (index > -1) {
  //       newCheckboxes.splice(index, 1);
  //     } else {
  //       newCheckboxes.push(id);
  //     }
  //     setCheckboxes(newCheckboxes);
  //   };


  return (
    <div className={style.userlist}>
      <button className={style["userlist__delete"]}>Delete Selected</button>
      <table className={style["userlist__table"]}>
        <thead>
          <tr>
            <th>
              <input className={style["head__input"]} type="checkbox" />
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody className={style.tablebody}>
          {items.map((item, index) => (
            <ListItem key={index} item={item} deleteItem={onItemDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
