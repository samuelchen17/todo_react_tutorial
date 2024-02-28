import { useState } from 'react'

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder='Enter todo...' />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue='' // resets the input once add is pressed
            }}>Add</button>

        </header>
    )
}
