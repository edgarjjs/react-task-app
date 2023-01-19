import "../styles/TaskForm.css";

const TaskForm = ({ tasks, setTasks, handleModalClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTask = {
      id: Date.now(),
      title: e.target.title.value,
      description: e.target.description.value,
    };

    if (!tasks.length) {
      setTasks([newTask]);
      localStorage.setItem("tasks", JSON.stringify([newTask]));
    } else {
      setTasks([...tasks, newTask]);
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }

    e.target.description.value = "";
    e.target.title.value = "";

    handleModalClick()
  };

  return (
    <div className="modal-container">
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

        <div className="buttons-container">
          <button
            type="button"
            className="button close"
            onClick={handleModalClick}
          >
            Cancelar
          </button>
          <button className="button submit" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
