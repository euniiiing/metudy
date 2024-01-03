import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import { myTodoState } from "@/store/atoms/myTodo";
import { BlockData } from "@/components/PostingForm";
import TodoItem from "./todo/TodoItem";
import TodoCard from "./todo/TodoCard";
import useGetMyTodoList from "@/queries/useGetMyTodoList";

interface IProps {
    haveProgressButton?: boolean;
}

const TodoList = ({ haveProgressButton = false }: IProps) => {
    const [todoListOfDay, setTodoListOfDay] = useRecoilState(myTodoState);
    const [todoListOfMonth, setTodoListOfMonth] = useState<ITodo[][]>([[]]);

    const data = useGetMyTodoList();
    console.log(data);

    useEffect(() => {
        setTodoListOfMonth(() => [
            [
                {
                    content: "메인페이지 UI 설계",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "2주차 스프린트 회의",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "백엔드 ERD 회의",
                    progress: 0,
                    isDone: true,
                },
            ],
            [
                {
                    content: "메인페이지 UI 설계",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "2주차 스프린트 회의",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "백엔드 ERD 회의",
                    progress: 0,
                    isDone: true,
                },
            ],
            [
                {
                    content: "메인페이지 UI 설계",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "2주차 스프린트 회의",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "백엔드 ERD 회의",
                    progress: 0,
                    isDone: true,
                },
            ],
        ]);
    }, []);

    return (
        <TodoListLayout>
            <VLine />
            <HeaderOfMonth>JAN, 2024</HeaderOfMonth>
            {todoListOfMonth.map((todoListOfDay, day) => {
                return (
                    <TodoCardWrapper order={day} key={day}>
                        <Dot />
                        <TodoCard todoListOfDay={todoListOfDay} />
                    </TodoCardWrapper>
                );
            })}
        </TodoListLayout>
    );
};

interface StyleProps {
    order: number;
}

const TodoListLayout = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`;

const VLine = styled.div`
    position: absolute;
    border-right: 2px solid #dbdbdb;
    height: 100%;
`;

const HeaderOfMonth = styled.div`
    background-color: #59a257;
    width: 110px;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    font-size: 17px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    z-index: 1;
    margin-bottom: 30px;
`;

const TodoCardWrapper = styled("div")<StyleProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: ${({ order }) => (order % 2 === 0 ? "flex-start" : "flex-end")};
    width: 100%;
`;

const Dot = styled.div`
    position: absolute;
    top: 48%;
    left: calc(50% - 5px);
    width: 10px;
    height: 10px;
    background-color: #6d6d6d;
    border-radius: 100%;
`;

export default TodoList;
