import TaskCard from "./TaskCard";
import "../styles/TaskList.css";

function TaskList({ tasks, setTasks }) {
  if (!tasks.length) {
    return <h1>No hay tareas</h1>;
  }

  const completeTask = (id) => {
    let data = tasks.filter((task) => task.id !== id);
    setTasks(data);
    localStorage.setItem('tasks', JSON.stringify(data))
    console.log(data)
  };

  return (
    <div className="main-cards-container">
      {tasks.length && tasks.map((task) => (
        <TaskCard
          title={task.title}
          description={task.description}
          id={task.id}
          key={task.id}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
