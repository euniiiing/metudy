import React, { useState } from "react";
import styled from "styled-components";

interface ITodo {
    value: string;
    progress: number;
    isDone: boolean;
}

interface Props {
    makeDiarySticker?: (e: any) => void;
}

const Todo = ({ makeDiarySticker }: Props) => {
    const [todoList, setTodoList] = useState<any[]>([
        {
            type: "todo",
            content: "1",
        },
        {
            type: "todo",
            content: "2",
        },
        {
            type: "todo",
            content: "3",
        },
    ]);
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
                return <button onClick={makeDiarySticker}>{todoContent.content}</button>;
            })}
        </TodoLayout>
    );
};

const TodoLayout = styled.div`
    width: 100%;
    height: 300px;
    background-color: #a0b8cd;
`;

export default Todo;
