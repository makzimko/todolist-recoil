import React, { useCallback, useState } from 'react'
import { useTodoList } from '../../atoms/todoList'

const Heading = () => {
    const [label, setLabel] = useState<string>('')
    const { addItem } = useTodoList()
    const handleChange = useCallback(
        ({ currentTarget }) => {
            setLabel(currentTarget.value)
        },
        [setLabel],
    )
    const handleKeyUp = useCallback(
        ({ keyCode }) => {
            if (keyCode === 13) {
                addItem(label)
                setLabel('')
            }
        },
        [setLabel, label],
    )

    return (
        <>
            <h1>todo list</h1>
            <input
                value={label}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
            />
        </>
    )
}

export default Heading
