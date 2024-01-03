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
                if (bd.type === "sticker") {
                    return (
                        <StickerBlock
                            data-index={idx}
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onKeyDown={(e: KeyboardEvent) => handleKeyboard(e)}
                            className={bd.type === "sticker" ? "sticker-block" : ""}
                            key={idx}
                        >
                            {bd.content}
                        </StickerBlock>
                    );
                }
                return (
                    <TextBlock
                        onKeyDown={handleKeyboard}
                        height={"28px"}
                        fontSize={"20px"}
                        paddingTop={"1px"}
                    />
                );
            })}
        </EditorLayout>
    );
};

const EditorLayout = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 0.8em;

    *:focus {
        outline: none;
    }
`;

const StickerBlock = styled.div`
    box-sizing: border-box;
    min-width: 100px;
    height: 37px;
    padding-top: 10px;
    padding-left: 15px;
    background-color: aliceblue;
    margin: 3px;
`;

export default Editor;
