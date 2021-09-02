import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import classNames from 'classnames'

import TodoItemState, { useTodoItem } from '../../../atoms/todoItem'

type TodoItemProps = {
    id: string
}

const TodoItem = ({ id }: TodoItemProps) => {
    const todoItem = useRecoilValue(TodoItemState(id))
    const { updateItem, removeItem } = useTodoItem(id)

    const changeCompleteStatus = useCallback(
        ({ currentTarget }) => {
            updateItem({ completed: currentTarget.checked })
        },
        [updateItem],
    )

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
                    onChange={changeCompleteStatus}
                />
                <label>{todoItem.label}</label>
                <button className="destroy" onClick={removeItem} />
            </div>
            <input className="edit" value="Create a TodoMVC template" />
        </li>
    )
}

export default TodoItem
