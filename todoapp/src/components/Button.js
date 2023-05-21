import style from "./Button.module.css";

const Button = (props) => {
  return (
    <input
      className={style["btn"]}
      type={props.type}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default Button;
