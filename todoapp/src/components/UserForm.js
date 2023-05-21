import style from "./UserForm.module.css";

const UserForm = () => {
  return (
    <form className={style.userform}>
      <div className={style["userform__formgroup"]}>
        <label className={style["userform__label"]} htmlFor="description">
          Description
        </label>
        <input id="description" type="text" />
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
        <input
          className={style["userform__submit"]}
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default UserForm;
