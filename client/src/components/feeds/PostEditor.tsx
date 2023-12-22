import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Todo from "@/components/todo/Todo";
import BlockEditor from "../todo/BlockEditor";

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
            <BlockEditor
                todoListData={todoListData}
                focusNextLine={focusNextLine}
                changeCaret={changeCaret}
                setInputValue={setInputValue}
            />
        </PostEditorLayout>
    );
};

const PostEditorLayout = styled.div`
    border: 1px solid #e3e3e3;
    border-radius: 1em;
    width: 100%;
`;

export default PostEditor;
