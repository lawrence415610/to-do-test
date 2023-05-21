import style from "./UserList.module.css";
import { useState, useRef } from "react";

const UserList = () => {
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

  //TODO:

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
        <tbody className={style.body}>
          <tr className={style["body__item"]}>
            <td>
              <input
                className={style["body__item-input"]}
                type="checkbox"
              />
            </td>
            <td className={style["body__item-des"]}>Some Description</td>
            <td className={style["body__item-type"]}>CSS</td>
            <td>
              <input
                className={style["body__item-operate"]}
                type="button"
                value="Delete"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
