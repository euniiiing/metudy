import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import { useRecoilValue } from "recoil";
import { getMyTodoList } from "@/api/todo/get-my-todoList";
import TodoCheckButton from "@/components/todo/TodoCheckButton";
import TodoContent from "@/components/todo/TodoContent";
import TodoProgressButton from "@/components/todo/TodoProgressButton";
import { TodoCard } from "./TodoCard";

interface IProps {
    children?: ReactNode;
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const TodoListMain = ({ children, makeDiarySticker }: IProps) => {
    const todoList: ITodo[] = useRecoilValue(getMyTodoList);

    return (
        <TodoListLayout>
            {todoList.map((todo: ITodo) => {
                return (
                    <TodoCard>
                        <TodoCard.CheckButton todo={todo} />
                        <TodoCard.Content todo={todo} />
                        <TodoCard.ProgressButton todo={todo} />
                    </TodoCard>
                );
            })}
        </TodoListLayout>
    );
};

const TodoListLayout = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
`;

export const TodoList = Object.assign(TodoListMain, {
    CheckButton: TodoCheckButton,
    Content: TodoContent,
    ProgressButton: TodoProgressButton,
});
