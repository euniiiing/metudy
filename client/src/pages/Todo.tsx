import React from "react";
import styled from "styled-components";

import PostingForm from "@/components/PostingForm";
import TodoList from "@/components/TodoList";

const Todo = () => {
    return (
        <StyledTodo>
            <TodoTimeLine>
                <TodoList />
            </TodoTimeLine>
            <PostingForm width="600px" height="90%" />
        </StyledTodo>
    );
};

const StyledTodo = styled.main`
    background-color: #f8f8f8;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`;

const TodoTimeLine = styled.div`
    width: 600px;
    height: 90%;
`;

export default Todo;
