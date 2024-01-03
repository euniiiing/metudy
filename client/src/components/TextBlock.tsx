import React, { KeyboardEventHandler } from "react";
import styled from "styled-components";

interface StyleProps {
    height: string;
    fontSize: string;
    paddingTop?: string;
}

interface TextBlockProps extends StyleProps {
    onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

const TextBlock = ({ onKeyDown, ...props }: TextBlockProps) => {
    return <StyledTextBlock contentEditable onKeyDown={onKeyDown} {...props} />;
};

const StyledTextBlock = styled("div")<StyleProps>`
    box-sizing: border-box;
    width: 100%;
    height: ${({ height }) => height};
    padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)};
    padding-left: 5px;
    font-size: ${({ fontSize }) => fontSize};
    background-color: #f8f8f8;
    border-radius: 8px;

    &:focus {
        outline: none;
    }
`;

export default TextBlock;
