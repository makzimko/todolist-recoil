import { selector } from 'recoil'
import TodoListState from './todoList'

type todoListStatistics = {
    itemsLeft: number
}

const TodoListStatisticsState = selector<todoListStatistics>({
    key: 'TodoListStatistics',
    get: ({ get }) => {
        const todoList = get(TodoListState)
        return {
            itemsLeft: todoList.filter(({ completed }) => !completed).length,
        }
    },
})

export default TodoListStatisticsState
