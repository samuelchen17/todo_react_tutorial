import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

// caps for function names
function App() {
  // function returns JSX
  // JS where you can write HTML inside, JS code is wrapped by {}
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  )
}

export default App
