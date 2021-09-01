import React from 'react'
import { useRecoilValue } from 'recoil'

import TodoListState from '../../atoms/todoList'
import TodoItem from './TodoItem/TodoItem'

const TodoList = () => {
    const todoList = useRecoilValue(TodoListState)

    return (
        <ul className="todo-list">
            {todoList.map(({ id }) => (
                <TodoItem id={id} key={id} />
            ))}
        </ul>
    )
}

export default TodoList
