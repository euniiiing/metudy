import React from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";

interface Props {
    todo: ITodo;
    idx: number;
    toggleDoneTodo: (idx: number) => void;
}

const TodoItem = ({ todo, idx, toggleDoneTodo }: Props) => {
    return (
        <StyledTodoItem>
            <TodoCheckButtonLayout onClick={() => toggleDoneTodo(idx)}>
                {todo.isDone ? "O" : "X"}
            </TodoCheckButtonLayout>
            <TodoContentLayout>
                <span className={todo.isDone ? "done" : ""}>{todo.content}</span>
            </TodoContentLayout>
        </StyledTodoItem>
    );
};

const StyledTodoItem = styled.div`
    display: flex;
`;

const TodoCheckButtonLayout = styled.button``;

const TodoContentLayout = styled.div`
    .done {
        text-decoration: line-through;
    }
`;

export default TodoItem;
