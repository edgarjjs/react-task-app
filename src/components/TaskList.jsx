import TaskCard from "./TaskCard";
import "../styles/TaskList.css";
import listEmpty from '../assets/completado.jpg'

function TaskList({ tasks, setTasks }) {
  if (!tasks.length) {
    return (
      <div className="list-empty-container">
        <h1 className="list-empty-title">¡Se han completado todas las tareas!</h1>
        <img className="list-empty-image" src={listEmpty} alt='image list empty' />
      </div>
    );
  }

  const completeTask = (id) => {
    let data = tasks.filter((task) => task.id !== id);
    setTasks(data);
    localStorage.setItem("tasks", JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="main-cards-container">
      {tasks.length &&
        tasks.map((task) => (
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
