import React, {useEffect, useState} from 'react';
import './App.css';

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {


    const [todos, setTodos] = useState<TodosType[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    const todosForRender = todos.map(t => {
        return (
            <li>
                <input type="checkbox" checked={t.completed}/>
                <span><b>Id:</b> {t.id} </span>
                <span><b>UserId:</b> {t.userId} </span>
                <span><b>Title:</b> {t.title}</span>
            </li>
        )
    })
    return (
        <div className="App">
            <ul>
                {todosForRender}
            </ul>
        </div>
    );
}

export default App;
