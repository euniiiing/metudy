import React, { KeyboardEvent, KeyboardEventHandler, useState } from "react";
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

    const [postTitle, setPostTitle] = useState<string>("");
    const handleInputTitle = (e: KeyboardEvent) => {
        if (e.code === "Enter") {
            e.preventDefault();
        }
    };

    return (
        <PostingFormLayout {...props}>
            <TextBlock
                onKeyDown={handleInputTitle}
                height={"46px"}
                fontSize={"32px"}
                paddingTop={"2px"}
            />
            <Editor blocksData={blocksData} setBlocksData={setBlocksData} />
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled("div")<StyleProps>`
    box-sizing: border-box;
    background-color: white;
    border-radius: 1em;
    box-shadow: 1px 1px 25px 2px #cfcfcf;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 2em;
`;

export default PostingForm;
