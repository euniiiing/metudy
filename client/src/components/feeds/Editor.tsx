import React, { KeyboardEvent } from "react";
import styled from "styled-components";
import useEditor from "@/hooks/useEditor";
import { BlockInfo } from "@/hooks/useEditor";

const Editor = () => {
    const { blockInfo, blockContainerRef, handleKeyboard } = useEditor();

    return (
        <EditorLayout ref={blockContainerRef}>
            {blockInfo.map((ed: BlockInfo, idx: number) => {
                return (
                    <TextBlock
                        data-index={idx}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onKeyDown={(e: KeyboardEvent) => handleKeyboard(e)}
                    >
                        {ed.content}
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
`;

const TextBlock = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-top: 10px;
    padding-left: 15px;
`;

export default Editor;
