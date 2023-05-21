import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={style.navbar}>
        <ul className={style["navbar__list"]}>
          <li className={style["navbar__item"]}>
            <h1 className={style["navbar__logo"]}>TodoHub</h1>
          </li>
          <li className={style["navbar__item"]}>
            <Link className={style["navbar__link"]} to="/todo">
              Todo
            </Link>
          </li>
          <li className={style["navbar__item"]}>
            <Link className={style["navbar__link"]} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
