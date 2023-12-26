import React, { KeyboardEvent, MouseEventHandler, useEffect } from "react";
import styled from "styled-components";
import useEditor from "@/hooks/useEditor";
import ITodo from "@/api/todo/Todo";
import { BlockData } from "@/components/feeds/PostingForm";

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
                        >
                            {bd.content}
                        </StickerBlock>
                    );
                }
                return (
                    <TextBlock
                        data-index={idx}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onKeyDown={(e: KeyboardEvent) => handleKeyboard(e)}
                    >
                        {bd.content}
                    </TextBlock>
                );
            })}
        </EditorLayout>
    );
};

const EditorLayout = styled.div`
    border: 1px solid #e3e3e3;
    border-radius: 1em;
    width: 100%;
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

const TextBlock = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-top: 10px;
    padding-left: 15px;
`;

export default Editor;
