import { useMemo } from 'react'
import { selectorFamily, useRecoilCallback } from 'recoil'

import TodoListState from './todoList'
import { TodoItem } from '../types/todoList'

const TodoItemState = selectorFamily<TodoItem | undefined, string>({
    key: 'TodoItem',
    get:
        (id) =>
        ({ get }) => {
            const todoList = get(TodoListState) as TodoItem[]
            return todoList.find((item) => id === item.id)
        },
    set:
        (id) =>
        ({ set }, newValue) => {
            set(TodoListState, (todoList) =>
                todoList.map((todoItem) =>
                    todoItem.id === id ? (newValue as TodoItem) : todoItem,
                ),
            )
        },
})

export const useTodoItem = (id: string) => {
    const updateItem = useRecoilCallback(
        ({ set }) =>
            (newValue: Partial<TodoItem>) => {
                set(
                    TodoItemState(id),
                    (todoItem) =>
                        ({
                            ...todoItem,
                            ...newValue,
                        } as TodoItem),
                )
            },
    )

    const removeItem = useRecoilCallback(({ set }) => () => {
        set(TodoListState, (todoList) =>
            todoList.filter((todoItem) => id !== todoItem.id),
        )
    })

    return useMemo(() => ({ updateItem, removeItem }), [updateItem, removeItem])
}

export default TodoItemState
