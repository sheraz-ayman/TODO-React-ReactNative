import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { ToastContainer, toast } from "react-toastify";
import { MarkTodoApi, deleteTodoApi } from '../../services/api';

function Todo({ todo, setRefreshList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.desc);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Implement your save functionality here
  };

  const handleDelete = async () => {
    const result = await deleteTodoApi({
      todo_id: todo._id
    });
    if (result.data.status === 200) {
      setRefreshList(new Date());
      toast('Deleted');
    } else {
      toast('Failed to delete, please try again');
    }
  };

  const handleMarkTodo = async () => {
    const result = await MarkTodoApi({
      todo_id: todo._id
    });
    console.log('Mark todo result:', result); // Add this line for debugging
    if (result.data.status === 200) {
      // Update the UI immediately
      setIsCompleted(!isCompleted);
      console.log('isCompleted:', isCompleted); // Add this line for debugging
    }
  };
  

  return (
    <div className={`todo-container card mb-3 ${isCompleted ? 'border-success' : ''}`}>
      <div className="card-body">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value={isCompleted}
            checked={isCompleted}
            onChange={handleMarkTodo}
          />
          <label className={`form-check-label ${isCompleted ? 'text-success' : ''}`}>
            {/* {isCompleted ? 'Completed' : 'Not Completed'} */}
          </label>
        </div>
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        ) : (
          <p className="card-text">{task}</p>
        )}
        <p className="card-text">
          {moment(todo.date).fromNow()}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <FontAwesomeIcon icon={faTrash} className="mr-2 text-danger" style={{ cursor: "pointer" }} onClick={handleDelete} />
        {isEditing ? (
          <FontAwesomeIcon icon={faCheck} className="text-success" onClick={handleSave} />
        ) : (
          <FontAwesomeIcon icon={faEdit} className="text-primary" onClick={handleEdit} />
        )}
      </div>
    </div>
  );
}

export default Todo;
