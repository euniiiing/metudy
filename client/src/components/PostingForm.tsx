import React, { useState } from "react";
import styled from "styled-components";

import Editor from "@/components/Editor";

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

    return (
        <PostingFormLayout {...props}>
            <Editor blocksData={blocksData} setBlocksData={setBlocksData} />
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled("div")<StyleProps>`
    background-color: white;
    border-radius: 1em;
    box-shadow: 1px 1px 25px 2px #cfcfcf;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

export default PostingForm;
