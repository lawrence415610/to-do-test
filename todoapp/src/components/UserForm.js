import style from "./UserForm.module.css";
import TodoContext from "../store/todoContext";
import { useContext } from "react";
import Button from "./Button";

const UserForm = () => {
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const id = Math.random().toString();
    const description = event.target[0].value;
    const category = event.target[1].value;
    const content = event.target[2].value;
    let isChecked = false;
    const item = { id, description, category, content, isChecked };
    todoCtx.addItem(item);
  };

  return (
    <form id="form" onSubmit={submitHandler} className={style.userform}>
      <div className={style["userform__formgroup"]}>
        <label className={style["userform__label"]} htmlFor="description">
          Description <span>*</span>
        </label>
        <input id="description" type="text" required />
      </div>
      <div className={style["userform__formgroup"]}>
        <label className={style["userform__label"]} htmlFor="category">
          Category
        </label>
        <select className={style["userform__select"]} id="category">
          <option value="css">CSS</option>
          <option value="html">HTML</option>
          <option value="js">JavaScript</option>
        </select>
      </div>
      <div className={style["userform__formgroup"]}>
        <label className={style["userform__label"]} htmlFor="content">
          Content
        </label>
        <textarea
          className={style["userform__textarea"]}
          id="content"
          name="content"
          rows={4}
          cols={30}
        ></textarea>
      </div>
      <div className={style["userform__formgroup"]}>
        <Button value="Submit" type="submit" />
      </div>
    </form>
  );
};

export default UserForm;
