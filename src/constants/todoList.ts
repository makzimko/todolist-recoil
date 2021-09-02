import { TODO_LIST_FILTER } from '../types/todoList'

export const filters = [
    {
        id: TODO_LIST_FILTER.All,
        label: 'All',
        alias: '/',
    },
    {
        id: TODO_LIST_FILTER.Active,
        label: 'Active',
        alias: '/active',
    },
    {
        id: TODO_LIST_FILTER.Completed,
        label: 'Completed',
        alias: '/completed',
    },
]
