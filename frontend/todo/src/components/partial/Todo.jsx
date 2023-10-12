import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Todo() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState('Your task goes here');

  const handleCheck = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    // Implement your delete functionality here
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Implement your save functionality here
    setIsEditing(false);
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheck}
      />
      {isEditing ? (
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      ) : (
        <span className={isCompleted ? 'completed' : ''}>{task}</span>
      )}
      <FontAwesomeIcon icon={faTrash}color='red' className="delete" onClick={handleDelete} />
      {isEditing ? (
        <FontAwesomeIcon icon={faCheck} className="save" onClick={handleSave} />
      ) : (
        <FontAwesomeIcon icon={faEdit} className="edit" onClick={handleEdit} />
      )}
    </div>
  );
}

export default Todo;
