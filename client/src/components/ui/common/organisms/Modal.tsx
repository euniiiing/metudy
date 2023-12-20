import React, { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

interface StyleProps {
    width?: string;
    height?: string;
    backgroundcolor?: string;
    color?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    hoverBackgroundColor?: string;
    hoverColor?: string;
    disabled?: boolean;
    $ismodalon?: boolean;
}

interface Props extends StyleProps {}

const Modal = ({ children, ...props }: PropsWithChildren<Props>) => {
    return <ModalLayout {...props}>{children}</ModalLayout>;
};

const ModalLayout = styled("button")<StyleProps>`
    display: ${({ $ismodalon }) => ($ismodalon ? "block" : "none")};
    background-color: pink;
    position: absolute;
    width: ${({ width }) => width || "200px"};
    height: 100px;
    top: calc(100vh - 50% - 100px);
    left: calc(100vw - 50% - 100px);
`;

export default Modal;
