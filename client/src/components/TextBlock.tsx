import React, { FormEventHandler, KeyboardEventHandler, useEffect, useRef } from "react";
import styled from "styled-components";

interface StyleProps {
    height: string;
    fontSize: string;
    padding: string;
}

interface TextBlockProps extends StyleProps {
    initText?: string;
    onInput: FormEventHandler<HTMLDivElement>;
    onKeyDown: KeyboardEventHandler<Element>;
}

const TextBlock = ({ initText, onInput, onKeyDown, ...props }: TextBlockProps) => {
    const blockRef = useRef<HTMLDivElement>(null);

    return (
        <StyledTextBlock
            contentEditable
            ref={blockRef}
            onInput={onInput}
            onKeyDown={onKeyDown}
            suppressContentEditableWarning
            {...props}
        >
            {initText}
        </StyledTextBlock>
    );
};

const StyledTextBlock = styled("div")<StyleProps>`
    box-sizing: border-box;
    width: 100%;
    padding: ${({ padding }) => (padding ? padding : 0)};
    padding-left: 5px;
    margin-bottom: 5px;
    font-size: ${({ fontSize }) => fontSize};
    background-color: #f8f8f8;
    border-radius: 0.3em;

    &:focus {
        outline: none;
    }
`;

export default TextBlock;
