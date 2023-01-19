import { useEffect, useState } from "react";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import AppHeader from "./components/AppHeader";

import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleModalClick = () => {
    setisModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (localStorage.tasks) {
      let data = JSON.parse(localStorage.tasks);
      setTasks(data);
    }
  }, []);

  return (
    <div className="appBody">
      {isModalOpen && (
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          handleModalClick={handleModalClick}
        />
      )}
      <AppHeader />
      <button className="button-add" onClick={handleModalClick}>+</button>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
