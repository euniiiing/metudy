import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
    Content: () => JSX.Element;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
    const { Content, onClick } = props;
    return (
        <StyledButton onClick={onClick}>
            <Content />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
`;

export default Button;
