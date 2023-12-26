import ITodo from "@/api/todo/Todo";
import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
    todo: ITodo;
    makeDiarySticker?: (td: ITodo) => void;
}

const TodoContent = ({ todo, makeDiarySticker = () => {} }: Props) => {
    return (
        <TodoContentLayout onClick={() => makeDiarySticker(todo)}>
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
