import React, { MouseEvent, MouseEventHandler, useState } from "react";
import styled from "styled-components";
import Editor from "@/components/feeds/Editor";
import Todo from "@/components/todo/Todo";
import { TodoList } from "@/components/todo/TodoList";
import ITodo from "@/api/todo/Todo";

type ContentType = "text" | "sticker";

export interface BlockData {
    type: ContentType;
    content: string;
}

const PostingForm = () => {
    const [blocksData, setBlocksData] = useState<BlockData[]>([
        { type: "text", content: "" },
        { type: "text", content: "" },
        { type: "text", content: "" },
    ]);

    return (
        <PostingFormLayout>
            <Todo>
                <StyledTodoHeader>todo</StyledTodoHeader>
                <TodoList haveProgressButton={false} setBlocksData={setBlocksData} />
            </Todo>
            <Editor blocksData={blocksData} setBlocksData={setBlocksData} />
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
