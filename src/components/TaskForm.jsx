import "../styles/TaskForm.css";

const TaskForm = ({ tasks, setTasks }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTask = {
      id: Date.now(),
      title: e.target.title.value,
      description: e.target.description.value,
    };

    if (!tasks.length) {
      setTasks([newTask]);
      localStorage.setItem('tasks', JSON.stringify([newTask]))
    } else {
      setTasks([...tasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    }

    e.target.description.value = "";
    e.target.title.value = "";
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        name="title"
        className="form-input-title"
        type="text"
        placeholder="Titulo de la tarea"
        required={true}
      />
      <textarea
        name="description"
        className="form-input-description"
        placeholder="Descripción de la tarea"
        required={true}
      />
      <button className="form-button">Guardar</button>
    </form>
  );
};

export default TaskForm;
