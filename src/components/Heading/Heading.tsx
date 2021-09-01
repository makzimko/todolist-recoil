import React from 'react'

const Heading = () => {
    return (
        <>
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
            />
        </>
    )
}

export default Heading
