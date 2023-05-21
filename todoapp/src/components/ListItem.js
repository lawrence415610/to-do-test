import style from "./ListItem.module.css";

const ListItem = ({ item }) => {
    return (
        <tr className={style["body__item"]}>
        <td>
            <input id={item.id} className={style["body__item-input"]} type="checkbox" />
        </td>
        <td className={style["body__item-des"]}>{item.description}</td>
        <td className={style["body__item-type"]}>{item.category}</td>
        <td>
            <input
            className={style["body__item-operate"]}
            type="button"
            value="Delete"
            />
        </td>
        </tr>
    );
};

export default ListItem;
