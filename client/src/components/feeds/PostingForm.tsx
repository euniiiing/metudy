import React from "react";
import styled from "styled-components";
import Editor from "@/components/feeds/Editor";
import Todo from "@/components/todo/Todo";

const PostingForm = () => {
    return (
        <PostingFormLayout>
            <Todo />
            <Editor />
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export default PostingForm;
