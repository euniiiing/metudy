import React, { useState } from "react";
import styled from "styled-components";

interface ITodo {
    value: string;
    progress: number;
    isDone: boolean;
}

const Todo = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const registTodo = () => {
        const newTodo: ITodo = {
            value: inputValue,
            progress: 0,
            isDone: false,
        };
        setTodoList((prev) => [...prev, newTodo]);
        setInputValue("");
    };

    return (
        <TodoLayout>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}></input>
            <button onClick={registTodo}>등록</button>
            <hr />
            {todoList?.map((todoContent) => {
                return <div>{todoContent.value}</div>;
            })}
        </TodoLayout>
    );
};

const TodoLayout = styled.div`
    width: 100%;
    height: 100%;
`;

export default Todo;
