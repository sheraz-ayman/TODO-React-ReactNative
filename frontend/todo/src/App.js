import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import TodoList from './pages/Todos/TodoList';
import TodoForm from './pages/Todos/TodoForm';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/todos' element={<TodoList/>}></Route>
      <Route path='/addTodo' element={<TodoForm/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
