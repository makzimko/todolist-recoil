import React from 'react'

const TodoList = () => {
    return (
        <ul className="todo-list">
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" checked />
                    <label>Taste JavaScript</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" />
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Buy a unicorn</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value="Rule the web" />
            </li>
        </ul>
    )
}

export default TodoList
