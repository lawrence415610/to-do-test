import { Link } from "react-router-dom";
import style from "./404.module.css";

const ErrorPage = () => {
    return (
      <main className={style.main}>
        <h1>404 Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/todo">Back To Home</Link>
      </main>
    );
};

export default ErrorPage;