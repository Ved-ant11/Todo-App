import { useState } from "react";
import "./style.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const deleteTask = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  };

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            const task = { id: Date.now(), name: newTask };
            setTodoList([...todoList, task]);
            setNewTask("");
          }}
        >
          Add Task
        </button>
      </div>
      <div className="list-container">
        <ul>
          {todoList.map((task) => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => deleteTask(task.id)}>Delete Task</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
