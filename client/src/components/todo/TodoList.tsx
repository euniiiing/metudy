import React, { MouseEventHandler } from "react";
import ITodo from "@/api/todo/Todo";
import styled from "styled-components";

interface IProps {
    todoListData: ITodo[];
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const TodoList = ({ todoListData, makeDiarySticker }: IProps) => {
    return (
        <TodoListLayout>
            {todoListData?.map((todoData) => {
                return <TodoCard onClick={makeDiarySticker}>{todoData.content}</TodoCard>;
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

const TodoCard = styled.div`
    margin: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export default TodoList;
