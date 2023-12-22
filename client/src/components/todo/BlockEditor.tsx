import React from "react";
import styled from "styled-components";

interface Props {
    todoListData: any;
    focusNextLine: any;
    changeCaret: any;
    setInputValue: any;
}

const BlockEditor = ({ todoListData, focusNextLine, changeCaret, setInputValue }: Props) => {
    return (
        <BlockEditorLayout>
            {todoListData?.map((item: any, idx: any) => {
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
        </BlockEditorLayout>
    );
};

const BlockEditorLayout = styled.div`
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

export default BlockEditor;
