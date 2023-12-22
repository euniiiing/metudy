import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PostEditor = () => {
    const [selectedItem, setSelectedItem] = useState<any[]>([]);
    const [focusingIdx, setFocusingIdx] = useState<number>(0);
    const caretRef = useRef<any>(undefined);

    const pushItem = (e: any) => {
        setSelectedItem((prev) => [...prev, e.target.textContent]);
    };

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

        setSelectedItem((prev) => {
            const newNodes = [...prev];
            newNodes.splice(parseInt(caretRef.current.dataset.index) + 1, 0, "");
            return newNodes;
        });
    };

    useEffect(() => {
        if (!caretRef.current) return;
        caretRef.current = caretRef.current.nextSibling;
        caretRef.current.focus();
    }, [selectedItem]);

    const changeCaret = (e: any) => {};

    return (
        <>
            <TodoBox>
                <button onClick={pushItem}>안녕</button>
                <button onClick={pushItem}>2</button>
                <button onClick={pushItem}>3</button>
            </TodoBox>
            <BlockEditor>
                {selectedItem?.map((item, idx) => {
                    return (
                        <TextBlock
                            data-index={idx}
                            contentEditable={true}
                            draggable={true}
                            onKeyDown={(e: any) => focusNextLine(e)}
                            suppressContentEditableWarning={true}
                            onFocus={changeCaret}
                        >
                            {item}
                        </TextBlock>
                    );
                })}
            </BlockEditor>
        </>
    );
};

const TodoBox = styled.div`
    background-color: yellow;
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
    background-color: aliceblue;
    width: 100%;
`;

const TextBlock = styled.div`
    width: 100%;
`;

export default PostEditor;
