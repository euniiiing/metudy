import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface StyleProps {
    width?: string;
    height?: string;
}

interface ButtonProps extends StyleProps {
    content: string;
    Icon?: () => JSX.Element;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
    const { content, Icon, onClick, ...styleProps } = props;
    return (
        <StyledButton onClick={onClick} {...styleProps}>
            {Icon ? <Icon /> : content}
        </StyledButton>
    );
};

const StyledButton = styled.button<StyleProps>`
    background-color: transparent;
    border: none;
    width: ${({ width }) => (width ? width : "10px")};
    height: ${({ height }) => (height ? height : "10px")};
`;

export default Button;
