import { useEffect, useState } from "react";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./styles/App.css";
import AppHeader from "./components/AppHeader";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.tasks) {
      let data = JSON.parse(localStorage.tasks)
      setTasks(data)
    }
  }, [])

  return (
    <div className="appBody">
      <AppHeader />
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
