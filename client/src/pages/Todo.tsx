import PostingForm from "@/components/PostingForm";
import React from "react";
import styled from "styled-components";

const Todo = () => {
    return (
        <StyledTodo>
            <MyTodoTimeLine></MyTodoTimeLine>
            <PostingForm width="650px" height="90%" />
        </StyledTodo>
    );
};

const StyledTodo = styled.main`
    background-color: #f8f8f8;
    flex: 1;
    display: flex;
    align-items: center;
`;

const MyTodoTimeLine = styled.div`
    background-color: #848d95;
    width: 350px;
    height: 90%;
    margin: 0 50px 0 50px;
`;

export default Todo;
