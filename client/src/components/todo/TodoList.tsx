import React, { MouseEventHandler, ReactNode, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import { getMyTodoList } from "@/api/todo/get-my-todoList";
import TodoCheckButton from "@/components/todo/TodoCheckButton";
import TodoContent from "@/components/todo/TodoContent";
import TodoProgressButton from "@/components/todo/TodoProgressButton";
import { TodoCard } from "./TodoCard";
import { myTodoState } from "@/store/atoms/myTodo";
import { BlockData } from "@/components/PostingForm";

interface IProps {
    haveProgressButton: boolean;
    setBlocksData: React.Dispatch<React.SetStateAction<BlockData[]>>;
}

const TodoListMain = ({ haveProgressButton, setBlocksData }: IProps) => {
    const [todoList, setTodoList] = useRecoilState(myTodoState);

    const toggleDoneTodo = (idx: number) => {
        const newTodoList: ITodo[] = todoList.map((todo, i) =>
            i === idx ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodoList(newTodoList);
    };

    const makeDiarySticker = (td: ITodo) => {
        setBlocksData((prev) => [...prev, { type: "sticker", content: td.content }]);
    };

    useEffect(() => {
        setTodoList(() => [
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
        ]);
    }, []);

    return (
        <TodoListLayout>
            {todoList.map((todo: ITodo, idx: number) => {
                return (
                    <TodoCard>
                        <TodoCard.CheckButton
                            todo={todo}
                            idx={idx}
                            toggleDoneTodo={toggleDoneTodo}
                        />
                        <TodoCard.Content todo={todo} makeDiarySticker={makeDiarySticker} />
                        {haveProgressButton && <TodoCard.ProgressButton todo={todo} />}
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
