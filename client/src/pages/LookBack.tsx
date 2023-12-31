import PostingForm, { BlockData } from "@/components/feeds/PostingForm";
import { TodoList } from "@/components/todo/TodoList";
import React from "react";
import styled from "styled-components";

const LookBack = () => {
    return (
        <StyledLookBack>
            <StyledTodo>
                <TodoList
                    haveProgressButton={false}
                    setBlocksData={function (value: React.SetStateAction<BlockData[]>): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </StyledTodo>
            <StyledEditor>
                <PostingForm />
            </StyledEditor>
        </StyledLookBack>
    );
};

const StyledLookBack = styled.div`
    background-color: #cbe5e5;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3em;
`;

const StyledTodo = styled.div`
    width: 20em;
    height: 80%;
    background-color: beige;
`;

const StyledEditor = styled.div`
    width: 50em;
    min-height: 80%;
    margin-left: 3em;
    background-color: #8f8f6f;
`;

export default LookBack;
