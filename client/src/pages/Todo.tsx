import React from "react";
import styled from "styled-components";

const Todo = () => {
    return (
        <StyledTodo>
            <MyTodoTimeLine></MyTodoTimeLine>
            <PostingForm></PostingForm>
        </StyledTodo>
    );
};

const StyledTodo = styled.main`
    background-color: beige;
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

const PostingForm = styled.div`
    background-color: #394753;
    width: 650px;
    height: 90%;
`;

export default Todo;
