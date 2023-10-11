import React from 'react'
import { Link } from 'react-router-dom'

function TodoList() {
  return (
    <div>
        <h1>All TODO</h1>
        <Link to="/addTodo">Create a new Todo</Link>
    </div>
  )
}

export default TodoList