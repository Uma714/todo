import axios from 'axios';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title}
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
