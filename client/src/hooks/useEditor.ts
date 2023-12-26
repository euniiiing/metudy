import React, { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

type ContentType = "text" | "sticker";

export interface BlockInfo {
    type: ContentType;
    content: string;
}

interface Props {
    stickerContent: string;
}

interface ReturnType {
    blockInfo: BlockInfo[];
    blockContainerRef: React.RefObject<HTMLDivElement>;
    handleKeyboard: (e: KeyboardEvent) => void;
}

const useEditor = ({ stickerContent }: Props): ReturnType => {
    const [blockInfo, setBlockInfo] = useState<BlockInfo[]>([
        { type: "text", content: "" },
        { type: "text", content: "" },
        { type: "text", content: "" },
    ]);
    const blockContainerRef = useRef<HTMLDivElement>(null);
    const focusBlockRef = useRef<HTMLDivElement | undefined>(undefined);

    const isEmptyBlock = () => {};

    const moveToNextLine = (e: KeyboardEvent): void => {
        e.preventDefault(); // 자식 div 생성
        if (e.nativeEvent.isComposing) return;

        const selection: Selection | null = window.getSelection();
        const nodeName: string | undefined = selection?.anchorNode?.nodeName;
        switch (nodeName) {
            case "#text":
                console.log("txt");
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

    const moveToPrevLine = (e: KeyboardEvent): void => {
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

        if ((focusBlockRef.current?.textContent?.length as number) > 0) {
            e.preventDefault();
        }

        setBlockInfo((prev): BlockInfo[] => {
            const newBlocks: BlockInfo[] = [...prev];
            if (!focusBlockRef.current) return [];
            newBlocks.splice(parseInt(focusBlockRef.current.dataset.index as string) + 1, 1);
            return newBlocks;
        });
    };

    const handleKeyboard = (e: KeyboardEvent): void => {
        switch (e.code) {
            case "Enter":
                moveToNextLine(e);
                break;
            case "Backspace":
                console.log("back");
                moveToPrevLine(e);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (!focusBlockRef.current) return;
        focusBlockRef.current.focus();

        console.log(focusBlockRef.current);

        try {
            const selection: Selection | null = window.getSelection();
            const range: Range = document.createRange();

            const offset: number = focusBlockRef.current.textContent?.length as number;

            range.setStart(focusBlockRef.current.childNodes[0], offset);
            range.setEnd(focusBlockRef.current.childNodes[0], offset);

            (selection as Selection).removeAllRanges();
            (selection as Selection).addRange(range);
            console.log("new");
        } catch (e) {
            console.log(e);
        }
    }, [blockInfo]);

    useEffect(() => {
        setBlockInfo((prev) => [...prev, { type: "sticker", content: stickerContent }]);
    }, [stickerContent]);

    useEffect(() => {
        if (!blockContainerRef.current) return;
        focusBlockRef.current = blockContainerRef.current.firstElementChild as HTMLDivElement;
        focusBlockRef.current.focus();
    }, []);

    return { blockInfo, blockContainerRef, handleKeyboard };
};

export default useEditor;
