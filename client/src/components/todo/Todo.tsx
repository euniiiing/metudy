import React, { MouseEventHandler, ReactNode, useState } from "react";
import styled from "styled-components";

import { TodoList } from "@/components/todo/TodoList";

interface Props {
    children?: ReactNode;
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const Todo = ({ children, makeDiarySticker }: Props) => {
    return (
        <TodoLayout>
            <StyledTodoHeader>Todo</StyledTodoHeader>
            <TodoList makeDiarySticker={makeDiarySticker}>{children}</TodoList>
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
