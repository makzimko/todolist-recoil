import React from 'react'
import { useRecoilValue } from 'recoil'
import classNames from 'classnames'

import TodoListStatisticsState from '../../atoms/todoListStatistics'
import TodoListFilterState from '../../atoms/todoListFilter'
import { useTodoList } from '../../atoms/todoList'
import { filters } from '../../constants/todoList'

const Toolbar = () => {
    const { itemsLeft } = useRecoilValue(TodoListStatisticsState)
    const activeFilter = useRecoilValue(TodoListFilterState)
    const { clearCompleted } = useTodoList()

    return (
        <>
            <span className="todo-count">
                <strong>{itemsLeft}</strong> item left
            </span>
            <ul className="filters">
                {filters.map(({ id, label, alias }) => (
                    <li key={id}>
                        <a
                            href={alias}
                            className={classNames({
                                selected: activeFilter === id,
                            })}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </>
    )
}

export default Toolbar
