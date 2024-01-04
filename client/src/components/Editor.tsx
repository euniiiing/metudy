import React, { FormEvent, useRef } from "react";
import styled from "styled-components";
import useEditor from "@/hooks/useEditor";
import { BlockData } from "@/components/PostingForm";
import TextBlock from "./TextBlock";
import { useUploadPost } from "@/queries/useUploadPost";

interface Props {
    blocksData: BlockData[];
    setBlocksData: React.Dispatch<React.SetStateAction<BlockData[]>>;
}

const Editor = ({ blocksData, setBlocksData }: Props) => {
    const blocksContainer = useRef<HTMLDivElement>(null);

    const { handleKeyboard } = useEditor({ blocksContainer, blocksData, setBlocksData });

    const handleInput = (e: FormEvent) => {};

    const mutateSync = useUploadPost();

    const upload = () => {
        mutateSync.mutate();
    };

    return (
        <EditorLayout ref={blocksContainer}>
            <button onClick={upload}>upload</button>
            {blocksData.map((bd: BlockData, idx: number) => {
                return (
                    <TextBlock
                        initText={bd.content}
                        onKeyDown={handleKeyboard}
                        onInput={handleInput}
                        key={idx}
                        height={"28px"}
                        fontSize={"18px"}
                        padding={"6px"}
                    />
                );
            })}
        </EditorLayout>
    );
};

const EditorLayout = styled.div`
    width: 100%;
    padding-bottom: 0.8em;
`;

export default Editor;
