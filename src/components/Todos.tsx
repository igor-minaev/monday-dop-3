import React, {useState} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";

type PropsType = {
    todos: TodosType[]
    addTodos: (title: string) => void
}

export type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

export const Todos = (props: PropsType) => {
    const [title, setTitle] = useState('')
    const todosForRender = props.todos.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.completed}/>
                <span><b>Id:</b> {t.id} </span>
                <span><b>UserId:</b> {t.userId} </span>
                <span><b>Title:</b> {t.title}</span>
            </li>
        )
    })
    const onClickHandler = () => {
        props.addTodos(title)
        setTitle('')
    }
    return (
        <>
            <div>
                <Input title={title} setTitle={setTitle}/>
                <Button name="+" onClick={onClickHandler}/>
            </div>
            <ul>
                {todosForRender}
            </ul>
        </>
    );
};

