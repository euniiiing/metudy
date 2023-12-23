import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import ITodo from "@/api/todo/Todo";
import TodoList from "./TodoList";

interface Props {
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const Todo = ({ makeDiarySticker }: Props) => {
    return (
        <TodoLayout>
            <StyledTodoHeader>Todo</StyledTodoHeader>
            <TodoList makeDiarySticker={makeDiarySticker} />
        </TodoLayout>
    );
};

const TodoLayout = styled.div`
    width: 100%;
    border-bottom: 1px solid #e3e3e3;
`;

const StyledTodoHeader = styled.div`
    background-color: aliceblue;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    text-align: center;
    padding-top: 8px;
`;

export default Todo;
