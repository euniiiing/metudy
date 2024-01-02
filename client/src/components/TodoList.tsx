import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import { myTodoState } from "@/store/atoms/myTodo";
import { BlockData } from "@/components/PostingForm";
import TodoItem from "./todo/TodoItem";
import TodoCard from "./todo/TodoCard";

interface IProps {
    haveProgressButton?: boolean;
}

const TodoList = ({ haveProgressButton = false }: IProps) => {
    const [todoListOfDay, setTodoListOfDay] = useRecoilState(myTodoState);
    const [todoListOfMonth, setTodoListOfMonth] = useState<ITodo[][]>([[]]);

    useEffect(() => {
        // setTodoListOfDay(() => [
        //     {
        //         content: "밥 먹기",
        //         progress: 0,
        //         isDone: false,
        //     },
        //     {
        //         content: "양치하기",
        //         progress: 0,
        //         isDone: true,
        //     },
        //     {
        //         content: "샤워하기",
        //         progress: 0,
        //         isDone: true,
        //     },
        // ]);

        setTodoListOfMonth(() => [
            [
                {
                    content: "밥 먹기",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "양치하기",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "샤워하기",
                    progress: 0,
                    isDone: true,
                },
            ],
            [
                {
                    content: "밥 먹기",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "양치하기",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "샤워하기",
                    progress: 0,
                    isDone: true,
                },
            ],
            [
                {
                    content: "밥 먹기",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "양치하기",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "샤워하기",
                    progress: 0,
                    isDone: true,
                },
            ],
            [
                {
                    content: "밥 먹기",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "양치하기",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "샤워하기",
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
                    <TodoCardWrapper alignitems={day % 2 === 0 ? "flex-start" : "flex-end"}>
                        <TodoCard todoListOfDay={todoListOfDay} />
                    </TodoCardWrapper>
                );
            })}
        </TodoListLayout>
    );
};

interface StyleProps {
    alignitems: string;
}

const TodoListLayout = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    align-items: ${({ alignitems }) => alignitems};
    width: 100%;
`;
export default TodoList;
