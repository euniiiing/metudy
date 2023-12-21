import React, { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

interface StyleProps {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    backgroundcolor?: string;
    borderRadius?: string;
    padding?: string;
    $ismodalon?: boolean;
}

interface Props extends StyleProps {}

const Modal = ({ children, ...props }: PropsWithChildren<Props>) => {
    return <ModalLayout {...props}>{children}</ModalLayout>;
};

const ModalLayout = styled("div")<StyleProps>`
    display: ${({ $ismodalon }) => ($ismodalon ? "flex" : "none")};
    position: absolute;
    background-color: ${({ backgroundcolor }) => backgroundcolor || ""};
    top: ${({ top }) => top || "50%"};
    left: ${({ left }) => left || "50%"};
    width: ${({ width }) => width || 0};
    height: ${({ height }) => height || 0};
    padding: ${({ padding }) => padding || 0};
    border-radius: ${({ borderRadius }) => borderRadius ?? 0};
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
`;

export default Modal;