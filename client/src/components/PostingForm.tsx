import React, { FormEvent, KeyboardEvent, KeyboardEventHandler, useState } from "react";
import styled from "styled-components";

import Editor from "@/components/Editor";
import TextBlock from "./TextBlock";

type ContentType = "text" | "sticker";
export interface BlockData {
    type: ContentType;
    content: string;
}

interface StyleProps {
    width: string;
    height: string;
}

interface PostingFormProps extends StyleProps {}

const PostingForm = ({ ...props }: PostingFormProps) => {
    const [blocksData, setBlocksData] = useState<BlockData[]>([
        { type: "text", content: "" },
        { type: "text", content: "" },
        { type: "text", content: "" },
    ]);

    const [initText] = useState<string>("Next.js");
    const [, setPostTitle] = useState<string>(initText);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === "Enter") {
            e.preventDefault();
        }
    };
    const handleInput = (e: FormEvent) => {
        setPostTitle(e.currentTarget.innerHTML);
    };

    return (
        <PostingFormLayout {...props}>
            <PostTitle>
                <TextBlock
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    height={"46px"}
                    fontSize={"28px"}
                    $paddingTop={"6px"}
                    initText={initText}
                />
            </PostTitle>
            <Editor blocksData={blocksData} setBlocksData={setBlocksData} />
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled("div")<StyleProps>`
    box-sizing: border-box;
    background-color: white;
    /* border-radius: 1em; */
    box-shadow: 1px 1px 25px 2px #cfcfcf;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 2em;
`;

const PostTitle = styled.div`
    padding-bottom: 5px;
    margin-bottom: 10px;

    border-bottom: 1px solid #cfcfcf;
`;

export default PostingForm;
