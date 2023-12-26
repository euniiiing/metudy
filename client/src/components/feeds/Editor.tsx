import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ITodo from "@/api/todo/Todo";

type ContentType = "text" | "sticker";

interface BlockInfo {
    type: ContentType;
    content: string;
}

const Editor = () => {
    const [blockInfo, setBlockInfo] = useState<BlockInfo[]>([
        { type: "text", content: "" },
        { type: "text", content: "" },
        { type: "text", content: "" },
    ]);
    const blockContainerRef = useRef<HTMLDivElement>(null);
    const focusBlockRef = useRef<HTMLDivElement | undefined>(undefined);

    const handleFocus = () => {};

    const moveToNextLine = (e: KeyboardEvent) => {
        e.preventDefault(); // 자식 div 생성

        const selection: Selection | null = window.getSelection();
        const nodeName: string | undefined = selection?.anchorNode?.nodeName;
        switch (nodeName) {
            case "#text":
                focusBlockRef.current = selection?.anchorNode?.parentNode
                    ?.nextSibling as HTMLDivElement;
                break;
            case "DIV":
                focusBlockRef.current = selection?.anchorNode?.nextSibling as HTMLDivElement;
                break;
            default:
                break;
        }

        setBlockInfo((prev): BlockInfo[] => {
            const newBlock: BlockInfo = {
                type: "text",
                content: "",
            };
            const newBlocks: BlockInfo[] = [...prev];
            if (!focusBlockRef.current) return [];
            newBlocks.splice(
                parseInt(focusBlockRef.current.dataset.index as string) + 1,
                0,
                newBlock
            );
            return newBlocks;
        });
    };

    const moveToPrevLine = (e: KeyboardEvent) => {
        const selection: Selection | null = window.getSelection();
        const nodeName: string | undefined = selection?.anchorNode?.nodeName;
        switch (nodeName) {
            case "#text":
                if (selection?.anchorNode?.textContent) return;
                focusBlockRef.current = selection?.anchorNode?.parentNode
                    ?.previousSibling as HTMLDivElement;
                break;
            case "DIV":
                focusBlockRef.current = selection?.anchorNode?.previousSibling as HTMLDivElement;
                break;
            default:
                break;
        }

        setBlockInfo((prev): BlockInfo[] => {
            const newBlocks: BlockInfo[] = [...prev];
            if (!focusBlockRef.current) return [];
            newBlocks.splice(parseInt(focusBlockRef.current.dataset.index as string) + 1, 0);
            return newBlocks;
        });
    };

    const handleKeyboard = (e: KeyboardEvent) => {
        switch (e.code) {
            case "Enter":
                moveToNextLine(e);
                break;
            case "Backspace":
                moveToPrevLine(e);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (!focusBlockRef.current) return;
        focusBlockRef.current.focus();
    }, [blockInfo]);

    useEffect(() => {
        if (!blockContainerRef.current) return;
        focusBlockRef.current = blockContainerRef.current.firstElementChild as HTMLDivElement;
        focusBlockRef.current.focus();
    }, []);

    return (
        <EditorLayout ref={blockContainerRef}>
            {blockInfo.map((ed: BlockInfo, idx: number) => {
                return (
                    <TextBlock
                        data-index={idx}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onFocus={handleFocus}
                        onKeyDown={(e: any) => handleKeyboard(e)}
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
