import React, { useState } from "react";
import styled from "styled-components";

const PostEditor = () => {
    const [selectedItem, setSelectedItem] = useState<any[]>([]);

    const pushItem = (e: any) => {
        setSelectedItem((prev) => [...prev, e.target.textContent]);
        console.log(e);
    };

    const focusNextLine = (e: any) => {
        e.preventDefault();
        setSelectedItem((prev) => [...prev, ""]);
    };

    return (
        <>
            <TodoBox>
                <button onClick={pushItem}>안녕</button>
                <button onClick={pushItem}>2</button>
                <button onClick={pushItem}>3</button>
            </TodoBox>
            <BlockEditor>
                {selectedItem?.map((item) => {
                    return (
                        <TextBlock
                            contentEditable={true}
                            draggable={true}
                            onKeyDown={focusNextLine}
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
