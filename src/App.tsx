import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {Todos, TodosType} from "./components/Todos";


function App() {


    const [todos, setTodos] = useState<TodosType[]>([])

    // const title = useRef<HTMLInputElement>(null)
    console.log(todos)

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, [])

    // const todosForRender = todos.map(t => {
    //     return (
    //         <li key={t.id}>
    //             <input type="checkbox" checked={t.completed}/>
    //             <span><b>Id:</b> {t.id} </span>
    //             <span><b>UserId:</b> {t.userId} </span>
    //             <span><b>Title:</b> {t.title}</span>
    //         </li>
    //     )
    // })
    const onClickHandler = () => {
        fetchFoo()
    }
    const hideMeHandler = () => {
        setTodos([])
    }
    const addTodos = (title: string) => {

        const newTodos: TodosType = {
            completed: false,
            id: todos.length + 1,
            title,
            userId: Math.ceil((todos.length + 1) / 20)
        }
        setTodos([...todos, newTodos])

    }
    return (
        <div className="App">
            <div>
                <button onClick={onClickHandler}>Show me</button>
                <button onClick={hideMeHandler}>Hide me</button>
            </div>
            <Todos todos={todos} addTodos={addTodos}/>
            {/*<div>*/}
            {/*    <Input title={title} />*/}
            {/*    <Button name="+" onClick={addTodos}/>*/}
            {/*</div>*/}
            {/*<ul>*/}
            {/*    {todosForRender}*/}
            {/*</ul>*/}
        </div>
    );
}

export default App;
