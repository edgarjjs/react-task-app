import '../styles/TaskCard.css'

const TaskCard = ({ task, index, completeTask }) => {

  const handleClick = () => {
    completeTask(index)
  }

  return (
    <div className='card-container'>
      <div className='card-info'>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <button onClick={handleClick}>Completed</button>
    </div>
  );
};

export default TaskCard;
