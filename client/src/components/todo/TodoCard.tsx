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
            {todoListOfDay.map((todo: ITodo, idx: number) => {
                return <TodoItem todo={todo} />;
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

export default TodoCard;
