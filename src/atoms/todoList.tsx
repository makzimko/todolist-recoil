import { TodoItem } from '../types/todoList'
import { atom } from 'recoil'

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

export default TodoListState
