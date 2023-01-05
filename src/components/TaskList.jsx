import TaskCard from "./TaskCard";

import '../styles/TaskList.css'

function TaskList({ tasks, completeTask }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="main-cards-container">
      {tasks.map((task, index) => (
        <TaskCard
          task={task}
          index={index}
          key={task.id}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
