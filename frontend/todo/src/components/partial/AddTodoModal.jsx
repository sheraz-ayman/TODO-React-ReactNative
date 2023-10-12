import React, { useState } from 'react';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { createTodoApi } from '../../services/api';

function AddTodoModal({setRefreshList}) {
  const [todoDesc, setTodoDesc] = useState('');

  const handleTodoSubmit = async () => {
    console.log(todoDesc, 'todoDesc');
    if (todoDesc === '') {
      toast('Todo is required');
      return;
    }
  
    try {
      const result = await createTodoApi({ desc: todoDesc });
  
      if (result && result.data) {
        if (result.data.status === 200) {
          toast('Todo Added');
          setRefreshList(new Date())
        } else if (result.data.message) {
          toast(result.data.message);
        } else {
          toast('An error occurred with the response');
        }
      } else {
        toast('An error occurred with the response data');
      }
    } catch (error) {
      toast('An error occurred while processing your request');
      console.error(error);
    }
  };
  

  return (
    <div>
      <div className="modal mt-5" id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add new task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  rows={3}
                  placeholder="enter todos..."
                  onChange={(e) => { setTodoDesc(e.target.value) }}
                >
                </textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleTodoSubmit}  data-bs-dismiss="modal">Save Todo</button>
              <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setTodoDesc('') }}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodoModal;
