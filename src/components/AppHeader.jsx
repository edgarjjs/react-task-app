import "../styles/AppHeader.css";
import { FcTodoList } from "react-icons/fc";

const AppHeader = () => {
  return (
    <header>
      <h1 className="header-title">TaskApp</h1>
      <span>
        <FcTodoList />
      </span>
    </header>
  );
};

export default AppHeader;
