import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ITodo from "@/api/todo/Todo";

const Editor = () => {
    const [BlogData, setBlogData] = useState<ITodo[]>([
        {
            content: "",
            progress: 0,
            isDone: false,
        },
        {
            content: "",
            progress: 0,
            isDone: false,
        },
        {
            content: "",
            progress: 0,
            isDone: false,
        },
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
        caretRef.current = caretRef.current.nextSibling;
        // caretRef.current = caretRef.current.previousSibling;
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
        <EditorLayout>
            <BlockEditorLayout>
                {/* todoListData type 값 없음 -> 어떻게 하지 */}
                {BlogData?.map((item: ITodo, idx: number) => {
                    // if (item.type === "todo") {
                    //     return (
                    //         <StickerBlock
                    //             data-index={idx}
                    //             contentEditable={true}
                    //             draggable={true}
                    //             onKeyDown={(e: any) => focusNextLine(e)}
                    //             suppressContentEditableWarning={true}
                    //             onFocus={changeCaret}
                    //         >
                    //             {item.content}
                    //         </StickerBlock>
                    //     );
                    // }
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
            </BlockEditorLayout>
        </EditorLayout>
    );
};

const EditorLayout = styled.div`
    border: 1px solid #e3e3e3;
    border-radius: 1em;
    width: 100%;
`;

const BlockEditorLayout = styled.div`
    width: 100%;
    margin-bottom: 1em;

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
    /* height: 37px; */
    padding-top: 10px;
    padding-left: 15px;
`;

export default Editor;
