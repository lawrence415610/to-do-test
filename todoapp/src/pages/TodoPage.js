import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import style from "./TodoPage.module.css";

const TodoPage = () => {
  return (
    <main className={style.main}>
      <UserForm />
      <UserList />
    </main>
  );
};

export default TodoPage;
