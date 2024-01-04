import React, {
    FormEvent,
    KeyboardEvent,
    MutableRefObject,
    RefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { BlockData } from "@/components/PostingForm";

interface Props {
    blocksContainer: RefObject<HTMLDivElement>;
    blocksData: BlockData[];
    setBlocksData: React.Dispatch<React.SetStateAction<BlockData[]>>;
}

interface ReturnType {
    handleKeyboard: (e: KeyboardEvent) => void;
}

const useEditor = ({ blocksContainer, blocksData, setBlocksData }: Props): ReturnType => {
    const focusedBlockRef = useRef<HTMLDivElement>();

    const isEmptyBlock = (): boolean => {
        const focusedNodeType: string | undefined = window.getSelection()?.anchorNode?.nodeName;
        if (focusedNodeType === "DIV") {
            return true;
        }
        return false;
    };

    const moveToNextLine = (e: KeyboardEvent): void => {
        if (e.nativeEvent.isComposing) return; // 한글 두 번 찍힘

        const selection: Selection | null = window.getSelection();
        const nodeName: string | undefined = selection?.anchorNode?.nodeName;

        switch (nodeName) {
            case "#text":
                console.log("txt");
                focusedBlockRef.current = selection?.anchorNode?.parentNode
                    ?.nextSibling as HTMLDivElement;
                break;
            case "DIV":
                console.log("div");
                focusedBlockRef.current = selection?.anchorNode?.nextSibling as HTMLDivElement;
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
            // if (!focusBlockRef.current) return [];
            // newBlocks.splice(
            //     parseInt(focusBlockRef.current.dataset.index as string) + 1,
            //     0,
            //     newBlock
            // );
            return [...prev, newBlock];
        });
    };

    const moveToPrevLine = (e: KeyboardEvent): void => {
        const selection: Selection | null = window.getSelection();
        const nodeName: string | undefined = selection?.anchorNode?.nodeName;
        // switch (nodeName) {
        //     case "#text":
        //         if (selection?.anchorNode?.textContent) return;
        //         focusBlockRef.current = selection?.anchorNode?.parentNode
        //             ?.previousSibling as HTMLDivElement;
        //         break;
        //     case "DIV":
        //         focusBlockRef.current = selection?.anchorNode?.previousSibling as HTMLDivElement;
        //         break;
        //     default:
        //         break;
        // }

        // if ((focusBlockRef.current?.textContent?.length as number) > 0) {
        //     e.preventDefault();
        // }

        // setBlocksData((prev): BlockData[] => {
        //     const newBlocks: BlockData[] = [...prev];
        //     if (!focusBlockRef.current) return [];
        //     newBlocks.splice(parseInt(focusBlockRef.current.dataset.index as string) + 1, 1);
        //     return newBlocks;
        // });
    };

    const handleKeyboard = (e: KeyboardEvent): void => {
        switch (e.code) {
            case "Enter":
                e.preventDefault();
                moveToNextLine(e);
                break;
            case "Backspace":
                if (isEmptyBlock()) {
                    moveToPrevLine(e);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        // if (!focusBlockRef.current) return;
        // focusBlockRef.current.focus();
    }, [blocksData]);

    return { handleKeyboard };
};

export default useEditor;
