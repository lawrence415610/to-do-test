import style from "./ListItem.module.css";

const ListItem = ({ item, deleteItem }) => {
  const handleDelete = (e) => {
    deleteItem(e.target.name);
  };

  return (
    <tr className={style["body__item"]}>
      <td>
        <input
          name={item.id}
          className={style["body__item-input"]}
          type="checkbox"
        />
      </td>
      <td className={style["body__item-des"]}>{item.description}</td>
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
