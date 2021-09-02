import React from 'react'

import 'todomvc-app-css/index.css'
import Heading from './components/Heading/Heading'
import CompleteAll from './components/CompleteAll/CompleteAll'
import TodoList from './components/TodoList/TodoList'
import Toolbar from './components/Toolbar/Toolbar'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <Heading />
                </header>
                <section className="main">
                    <CompleteAll />
                    <TodoList />
                </section>
                <footer className="footer">
                    <Toolbar />
                </footer>
            </section>
            <footer className="info">
                <Footer />
            </footer>
        </div>
    )
}

export default App
