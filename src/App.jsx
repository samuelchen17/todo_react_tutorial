import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

// caps for function names
function App() {
  // function returns JSX
  // JS where you can write HTML inside, JS code is wrapped by {}
  const [todos, setTodos] = useState([])

  // 24 min in vid
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App

// https://www.youtube.com/watch?v=DHWrOpKSZkM&t=70s&ab_channel=Smoljames