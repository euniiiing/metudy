import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import ITodo from "@/api/todo/Todo";
import TodoList from "./TodoList";

interface Props {
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const Todo = ({ makeDiarySticker }: Props) => {
    const [todoListData, setTodoListData] = useState<ITodo[]>([
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
            <TodoList todoListData={todoListData} makeDiarySticker={makeDiarySticker} />
        </TodoLayout>
    );
};

const TodoLayout = styled.div`
    width: 100%;
    border-bottom: 1px solid #e3e3e3;
`;

export default Todo;
