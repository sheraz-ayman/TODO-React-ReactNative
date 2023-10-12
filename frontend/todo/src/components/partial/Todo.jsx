import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import {ToastContainer, toast} from "react-toastify"
import { deleteTodoApi } from '../../services/api';

function Todo({ todo,setRefreshList}) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.desc);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Implement your save functionality here
  };

  const handleDelete = async() => {
    const result = await deleteTodoApi({
      todo_id:todo._id
    })

    if (result.data.status ===200){
      setRefreshList(new Date())
      toast('Deleted')
    }else{
      toast('Failed to delete , please try again')
    }
  };

  return (
    <div className={`todo-container card mb-3 ${todo.isCompleted ? 'border-success' : ''}`}>
      <div className="card-body">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
          />
          <label className={`form-check-label ${todo.isCompleted ? 'text-success' : ''}`}>
            {/* {todo.isCompleted ? 'Completed' : 'Not Completed'} */}
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
        <FontAwesomeIcon icon={faTrash} className="mr-2 text-danger" style={{"pointer":"cursor"}} onClick={handleDelete} />
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
