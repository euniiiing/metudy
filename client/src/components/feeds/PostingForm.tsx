import React from "react";
import styled from "styled-components";
import Editor from "@/components/feeds/Editor";
import Todo from "@/components/todo/Todo";
import { TodoList } from "@/components/todo/TodoList";

const PostingForm = () => {
    return (
        <PostingFormLayout>
            <Todo>
                <StyledTodoHeader>todo</StyledTodoHeader>
                <TodoList haveProgressButton={false} />
            </Todo>
            <Editor />
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledTodoHeader = styled.div`
    background-color: aliceblue;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    text-align: center;
    padding-top: 8px;
`;

export default PostingForm;
