import { selectorFamily } from 'recoil'
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
})

export default TodoItemState
