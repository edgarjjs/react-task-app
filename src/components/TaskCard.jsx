import '../styles/TaskCard.css'

const TaskCard = ({ title, description, id, completeTask }) => {

  const handleClick = () => {
    completeTask(id)
  }

  return (
    <div className='card-container'>
      <div className='card-info'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button onClick={handleClick}>Completed</button>
    </div>
  );
};

export default TaskCard;
