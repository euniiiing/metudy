import React from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";

interface Props {
    todo: ITodo;
}

const TodoItem = ({ todo }: Props) => {
    return (
        <StyledTodoItem>
            <TodoCheckButton>{todo.isDone ? "O" : "X"}</TodoCheckButton>
            <TodoContent>{todo.content}</TodoContent>
        </StyledTodoItem>
    );
};

const StyledTodoItem = styled.div`
    display: flex;
`;

const TodoCheckButton = styled.button``;

const TodoContent = styled.div``;

export default TodoItem;
