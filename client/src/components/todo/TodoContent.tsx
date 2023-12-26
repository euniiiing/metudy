import ITodo from "@/api/todo/Todo";
import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
    todo: ITodo;
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const TodoContent = ({ todo, makeDiarySticker = () => {} }: Props) => {
    return (
        <TodoContentLayout onClick={(e: React.MouseEvent<HTMLDivElement>) => makeDiarySticker(e)}>
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
