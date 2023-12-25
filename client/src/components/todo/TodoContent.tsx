import ITodo from "@/api/todo/Todo";
import React from "react";
import styled from "styled-components";

interface Props {
    todo: ITodo;
}

const TodoContent = ({ todo }: Props) => {
    return (
        <TodoContentLayout>
            <span className={todo.isDone ? "done" : ""}>{todo.content}</span>
        </TodoContentLayout>
    );
};

const TodoContentLayout = styled.div`
    .done {
        text-decoration: line-through;
    }
`;

export default TodoContent;
