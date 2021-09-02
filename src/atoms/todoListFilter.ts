import { useMemo } from 'react'
import { atom, useRecoilCallback } from 'recoil'

import { TODO_LIST_FILTER } from '../types/todoList'

const TodoListFilterState = atom<TODO_LIST_FILTER>({
    key: 'TodoListFilter',
    default: TODO_LIST_FILTER.All,
})

export const useTodoListFilters = () => {
    const setFilter = useRecoilCallback(
        ({ set }) =>
            (filter: TODO_LIST_FILTER) => {
                set(TodoListFilterState, filter)
            },
    )

    return useMemo(() => ({ setFilter }), [setFilter])
}

export default TodoListFilterState
