import React from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import TodoItem from "@/components/todo/TodoItem";

interface TodoCardProps {
    todoListOfDay: ITodo[];
}

const TodoCard = ({ todoListOfDay }: TodoCardProps) => {
    return (
        <StyledTodoCard>
            <HeaderOfDay>01.02 월</HeaderOfDay>
            {todoListOfDay.map((todo: ITodo, idx: number) => {
                return <TodoItem todo={todo} key={idx} />;
            })}
        </StyledTodoCard>
    );
};

const StyledTodoCard = styled.div`
    box-sizing: border-box;
    width: 46%;
    background-color: white;
    padding: 13px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
`;

const HeaderOfDay = styled.div`
    padding-bottom: 5px;
    border-bottom: 1px solid #dbdbdb;
    color: #575757;
    font-weight: bold;
`;

export default TodoCard;
