import React from 'react';
import Header from '../../components/partial/Header';
import Todo from '../../components/partial/Todo';
import AddTodoModal from '../../components/partial/AddTodoModal';
import { getToken } from '../../services/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

const navigation=useNavigate()

  useEffect(() => {
    if(!getToken()){
      navigation('/login')
    }
  }, [])
  
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

      <AddTodoModal/>
    </div>
  );
}

export default Home;
