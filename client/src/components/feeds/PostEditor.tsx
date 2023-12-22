import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Todo from "@/components/todo/Todo";

const PostEditor = () => {
    const [todoListData, setDodoListData] = useState<any[]>([
        {
            type: "todo",
            content: "1",
        },
        {
            type: "todo",
            content: "2",
        },
        {
            type: "todo",
            content: "3",
        },
    ]);
    const caretRef = useRef<any>(undefined);
    const [inputValue, setInputValue] = useState("");

    const focusNextLine = (e: KeyboardEvent) => {
        // e.preventDefault(); // 자식 div 생성 === 줄 두 개
        if (e.code !== "Enter") return;
        else e.preventDefault();

        const selection = window.getSelection();

        const nodeName = selection?.anchorNode?.nodeName;

        if (nodeName === "#text") {
            caretRef.current = selection?.anchorNode?.parentNode;
        } else if (nodeName === "DIV") {
            caretRef.current = selection?.anchorNode;
        }

        setDodoListData((prev) => {
            const newText = {
                type: "text",
                content: "",
            };

            const newNodes = [...prev];
            newNodes.splice(parseInt(caretRef.current.dataset.index) + 1, 0, newText);
            return newNodes;
        });
    };

    useEffect(() => {
        if (!caretRef.current) return;
        caretRef.current = caretRef.current.nextSibling;
        caretRef.current.focus();
    }, [todoListData]);

    const changeCaret = (e: any) => {};

    const makeDiarySticker = (e: any) => {
        const newSticker = {
            type: "todo",
            content: e.target.textContent,
        };
        setDodoListData((prev) => [...prev, newSticker]);
    };

    return (
        <PostEditorLayout>
            <Todo makeDiarySticker={makeDiarySticker} />
            <BlockEditor>
                {todoListData?.map((item, idx) => {
                    if (item.type === "todo") {
                        return (
                            <StickerBlock
                                data-index={idx}
                                contentEditable={true}
                                draggable={true}
                                onKeyDown={(e: any) => focusNextLine(e)}
                                suppressContentEditableWarning={true}
                                onFocus={changeCaret}
                            >
                                {item.content}
                            </StickerBlock>
                        );
                    }

                    return (
                        <TextBlock
                            data-index={idx}
                            contentEditable={true}
                            draggable={true}
                            onKeyDown={(e: any) => focusNextLine(e)}
                            suppressContentEditableWarning={true}
                            onFocus={changeCaret}
                            onChange={(e: any) => setInputValue(e.target.value)}
                        >
                            {item.content}
                        </TextBlock>
                    );
                })}
            </BlockEditor>
        </PostEditorLayout>
    );
};

const PostEditorLayout = styled.div`
    border: 1px solid #e3e3e3;
    border-radius: 1em;
    width: 100%;
`;

const TodoBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 100px;
    }
`;

const BlockEditor = styled.div`
    width: 100%;
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
    height: 37px;
    padding-top: 10px;
    padding-left: 15px;
`;

export default PostEditor;
