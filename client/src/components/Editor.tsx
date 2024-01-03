import React, { KeyboardEvent, MouseEventHandler, useEffect } from "react";
import styled from "styled-components";
import useEditor from "@/hooks/useEditor";
import ITodo from "@/api/todo/Todo";
import { BlockData } from "@/components/PostingForm";
import TextBlock from "./TextBlock";

interface Props {
    blocksData: BlockData[];
    setBlocksData: React.Dispatch<React.SetStateAction<BlockData[]>>;
}

const Editor = ({ blocksData, setBlocksData }: Props) => {
    const { blockContainerRef, handleKeyboard } = useEditor({ blocksData, setBlocksData });

    return (
        <EditorLayout ref={blockContainerRef}>
            {blocksData.map((bd: BlockData, idx: number) => {
                return (
                    <TextBlock
                        initText={bd.content}
                        onKeyDown={handleKeyboard}
                        height={"28px"}
                        fontSize={"18px"}
                        $paddingTop={"3px"}
                        key={idx}
                        onInput={function (event: React.FormEvent<HTMLDivElement>): void {
                            throw new Error("Function not implemented.");
                        }}
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
