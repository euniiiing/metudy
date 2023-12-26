import React, { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { BlockData } from "@/components/feeds/PostingForm";

interface Props {
    blocksData: BlockData[];
    setBlocksData: React.Dispatch<React.SetStateAction<BlockData[]>>;
}

interface ReturnType {
    blockContainerRef: React.RefObject<HTMLDivElement>;
    handleKeyboard: (e: KeyboardEvent) => void;
}

const useEditor = ({ blocksData, setBlocksData }: Props): ReturnType => {
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

        setBlocksData((prev): BlockData[] => {
            const newBlock: BlockData = {
                type: "text",
                content: "",
            };
            const newBlocks: BlockData[] = [...prev];
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

        setBlocksData((prev): BlockData[] => {
            const newBlocks: BlockData[] = [...prev];
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
    }, [blocksData]);

    useEffect(() => {
        if (!blockContainerRef.current) return;
        focusBlockRef.current = blockContainerRef.current.firstElementChild as HTMLDivElement;
        focusBlockRef.current.focus();
    }, []);

    return { blockContainerRef, handleKeyboard };
};

export default useEditor;
