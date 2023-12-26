import React, { MouseEvent, MouseEventHandler, useState } from "react";
import styled from "styled-components";
import Editor from "@/components/feeds/Editor";
import Todo from "@/components/todo/Todo";
import { TodoList } from "@/components/todo/TodoList";
import ITodo from "@/api/todo/Todo";

const PostingForm = () => {
    const [stickerContent, setStickerContent] = useState<string>("");
    const makeDiarySticker = (e: React.MouseEvent<HTMLDivElement>) => {
        setStickerContent(e.currentTarget.firstChild?.textContent as string);
    };

    return (
        <PostingFormLayout>
            <Todo>
                <StyledTodoHeader>todo</StyledTodoHeader>
                <TodoList haveProgressButton={false} makeDiarySticker={makeDiarySticker} />
            </Todo>
            <Editor stickerContent={stickerContent} />
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
