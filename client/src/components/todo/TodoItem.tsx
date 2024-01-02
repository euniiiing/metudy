import React from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import Do from "../icons/Do";
import Done from "../icons/Done";

interface Props {
    todo: ITodo;
}

const TodoItem = ({ todo }: Props) => {
    return (
        <StyledTodoItem>
            <TodoCheckButton>{todo.isDone ? <Done /> : <Do />}</TodoCheckButton>
            <TodoContent>{todo.content}</TodoContent>
        </StyledTodoItem>
    );
};

const StyledTodoItem = styled.div`
    display: flex;
    margin-top: 10px;
`;

const TodoCheckButton = styled.button`
    margin-right: 2px;
    border: none;
    background: transparent;
`;

const TodoContent = styled.div`
    padding-top: 2px;
`;

export default TodoItem;
