import React, { MouseEventHandler, Suspense, useEffect, useState } from "react";
import ITodo from "@/api/todo/Todo";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { getMyTodoList } from "@/api/todo/get-my-todoList";

interface IProps {
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const TodoList = ({ makeDiarySticker }: IProps) => {
    const todoList: ITodo[] = useRecoilValue(getMyTodoList);

    return (
        <TodoListLayout>
            <Suspense>
                {todoList &&
                    todoList?.map((todoData: ITodo) => {
                        return <TodoCard onClick={makeDiarySticker}>{todoData.content}</TodoCard>;
                    })}
            </Suspense>
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

const TodoCard = styled.div`
    margin: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export default TodoList;
