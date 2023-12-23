import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Todo from "@/components/todo/Todo";
import BlockEditor from "../todo/BlockEditor";
import ITodo from "@/api/todo/Todo";
import { TodoList } from "../todo/TodoList";

const PostEditor = () => {
    const [BlogData, setBlogData] = useState<ITodo[]>([
        {
            content: "",
            progress: 0,
            isDone: false,
        },
    ]);
    const caretRef = useRef<any>(undefined);
    const [inputValue, setInputValue] = useState("");

    const focusNextLine = (e: any) => {
        if (e.code === "Enter") {
            e.preventDefault(); // 자식 div 생성

            const selection = window.getSelection();
            const nodeName = selection?.anchorNode?.nodeName;

            if (nodeName === "#text") {
                caretRef.current = selection?.anchorNode?.parentNode;
            } else if (nodeName === "DIV") {
                caretRef.current = selection?.anchorNode;
            }

            setBlogData((prev) => {
                const newText: ITodo = {
                    content: inputValue,
                    progress: 0,
                    isDone: false,
                };

                const newNodes = [...prev];
                newNodes.splice(parseInt(caretRef.current.dataset.index) + 1, 0, newText);
                return newNodes;
            });
        } else if (e.code === "Backspace") {
            const selection = window.getSelection();
            const nodeName = selection?.anchorNode?.nodeName;

            if (nodeName === "#text") {
                caretRef.current = selection?.anchorNode?.parentNode;
            } else if (nodeName === "DIV") {
                caretRef.current = selection?.anchorNode;
            }

            console.dir(caretRef.current);

            setBlogData((prev) => {
                const newNodes = [...prev];
                newNodes.splice(parseInt(caretRef.current.dataset.index) + 1, 1);
                return newNodes;
            });
        } else {
            console.log(e.code);
            return;
        }
    };

    useEffect(() => {
        if (!caretRef.current) return;
        // caretRef.current = caretRef.current.nextSibling;
        caretRef.current = caretRef.current.previousSibling;
        caretRef.current.focus();
    }, [BlogData]);

    const changeCaret = () => {};

    const makeDiarySticker = (e: any) => {
        const newSticker: ITodo = {
            content: e.target.textContent,
            progress: 0,
            isDone: false,
        };
        setBlogData((prev) => [...prev, newSticker]);
    };

    return (
        <PostEditorLayout>
            <Todo />

            <BlockEditor
                todoListData={BlogData}
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
