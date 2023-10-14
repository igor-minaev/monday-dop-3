import React, {useEffect, useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {


    const [todos, setTodos] = useState<TodosType[]>([])
    const [title, setTitle] = useState('')

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
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
    const onClickHandler = () => {
        fetchFoo()
    }
    const hideMeHandler = () => {
        setTodos([])
    }
    const addTodos = () => {
        const newTodos: TodosType = {
            completed: false,
            id: todos.length + 1,
            title: title,
            userId: Math.ceil((todos.length + 1) / 20)
        }
        setTodos([...todos, newTodos])
        setTitle('')
    }
    return (
        <div className="App">
            <div>
                <button onClick={onClickHandler}>Show me</button>
                <button onClick={hideMeHandler}>Hide me</button>
            </div>
            <div>
                <Input title={title} setTitle={setTitle}/>
                <Button name="+" onClick={addTodos}/>
            </div>
            <ul>
                {todosForRender}
            </ul>
        </div>
    );
}

export default App;
