import React, { useState } from 'react';
import "./TodoForm.css"

function TodoForm({ onSubmit }) {
  const [header, setHeader] = useState('');
  const [tasks, setTasks] = useState(['']);

  const handleAddTask = () => {
    setTasks([...tasks, '']);
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ header, tasks });
    setHeader('');
    setTasks(['']);
  };

  return (
    <div className="todo-form">
      <h2>Create New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Header"
          className="header-input"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />

        {tasks.map((task, taskIndex) => (
          <div key={taskIndex} className="task-container">
            <input
              type="checkbox"
              className="checkbox"
            />
            <input
              type="text"
              placeholder="Task"
              className="task-input"
              value={task}
              onChange={(e) => handleTaskChange(taskIndex, e.target.value)}
            />
          </div>
        ))}
        <button type="button" className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
