import React from 'react'
import { useRecoilValue } from 'recoil'
import classNames from 'classnames'

import TodoItemState from '../../../atoms/todoItem'

type TodoItemProps = {
    id: string
}

const TodoItem = ({ id }: TodoItemProps) => {
    const todoItem = useRecoilValue(TodoItemState(id))

    if (!todoItem) {
        return null
    }

    return (
        <li
            className={classNames({
                completed: todoItem.completed,
            })}
        >
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todoItem.completed}
                />
                <label>{todoItem.label}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
        </li>
    )
}

export default TodoItem
