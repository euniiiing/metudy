import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import ITodo from "@/api/todo/Todo";
import TodoList from "./TodoList";

interface Props {
    makeDiarySticker?: MouseEventHandler<HTMLButtonElement>;
}

const Todo = ({ makeDiarySticker }: Props) => {
    const [todoList, setTodoList] = useState<ITodo[]>([
        {
            content: "밥 먹기",
            progress: 0,
            isDone: false,
        },
        {
            content: "양치하기",
            progress: 0,
            isDone: true,
        },
        {
            content: "샤워하기",
            progress: 0,
            isDone: true,
        },
    ]);

    return (
        <TodoLayout>
            {todoList?.map((todoContent) => {
                return <button onClick={makeDiarySticker}>{todoContent.content}</button>;
            })}
            {/* <TodoList /> */}
        </TodoLayout>
    );
};

const TodoLayout = styled.div`
    width: 100%;
    height: 300px;
    background-color: #a0b8cd;
`;

export default Todo;
