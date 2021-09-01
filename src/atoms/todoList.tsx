import { useMemo } from 'react'
import { atom, useRecoilCallback } from 'recoil'
import { uid } from 'uid'

import { TodoItem } from '../types/todoList'

const TodoListState = atom<TodoItem[]>({
    key: 'TodoList',
    default: [
        {
            id: '123',
            label: 'First item',
            completed: true,
        },
        {
            id: '234',
            label: 'Second item',
            completed: false,
        },
        {
            id: '345',
            label: 'Third item',
            completed: false,
        },
    ],
})

export const useTodoList = () => {
    const addItem = useRecoilCallback(({ set }) => (label: string) => {
        set(TodoListState, (todoList) => [
            ...todoList,
            {
                id: uid(),
                label,
                completed: false,
            },
        ])
    })

    return useMemo(() => ({ addItem }), [addItem])
}

export default TodoListState
