import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./styles/App.css";
import AppHeader from "./components/AppHeader";

function App() {

  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  };

  const completeTask = (id) => {
    tasks.splice(id, 1)
    const prueba = [...tasks]
    setTasks(prueba)
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div className="appBody">
      <AppHeader />
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
    </div>
  );
}

export default App;
