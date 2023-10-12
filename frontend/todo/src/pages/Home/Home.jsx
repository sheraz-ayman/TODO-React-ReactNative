import React  ,{useState}from 'react';
import Header from '../../components/partial/Header';
import Todo from '../../components/partial/Todo';
import AddTodoModal from '../../components/partial/AddTodoModal';
import { getTodoListApi, getToken } from '../../services/api';
import { useEffect } from 'react';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';


function Home() {

const navigation=useNavigate()
const [list, setList] = useState([]);
const [refreshList, setRefreshList] = useState()

  useEffect(() => {
    if(!getToken()){
      navigation('/login')
    }
    fetchTodoList()
  }, [refreshList])

  async function fetchTodoList(){
    const result = await getTodoListApi()
     console.log('todolist',result)
    if(result.status ===200 && result.data.status===200){
      setList(result.data.data.todos.reverse())
    }
  }
  
  return (
    <div>
      <Header />
      <ToastContainer/>
      <div className="container">
        <div className="row justify-content-md-center mt-4">
          {
            list.map((todo)=><Todo todo={todo} key={todo._id} setRefreshList={setRefreshList}/>)
          }
   
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

      <AddTodoModal setRefreshList={setRefreshList}/>
    </div>
  );
}

export default Home;
