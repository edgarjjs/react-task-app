import { useState } from "react";
import "../styles/TaskForm.css";

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const newTask = {
    title,
    description,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="form-input-title"
        type="text"
        placeholder="Titulo de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className="form-input-description"
        placeholder="Descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="form-button">Guardar</button>
    </form>
  );
};

export default TaskForm;
