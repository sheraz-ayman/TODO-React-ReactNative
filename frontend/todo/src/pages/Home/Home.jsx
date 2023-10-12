import React from 'react';
import Header from '../../components/partial/Header';
import Todo from '../../components/partial/Todo';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center mt-4">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
      <div style={{ position: 'fixed', right: 50, bottom: 50, zIndex: 10 }}>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-outline-dark"
        >
          Add
        </button>
      </div>

      <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add new task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <span arial-hidden='true'></span>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <textarea name='' className='form-control' rows={3} placeholder='enter todos...'>

                </textarea>
              </div>
            </div>

            <div className="modal-footer">
              <button className='btn btn-secondary'>Save Todo</button>
              <button className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
