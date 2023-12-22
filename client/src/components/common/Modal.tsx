import React, { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

interface StyleProps {
    top?: string;
    left?: string;
    right?: string;
    width?: string;
    height?: string;
    backgroundcolor?: string;
    borderRadius?: string;
    padding?: string;
    $ismodalon: boolean;
}

interface Props extends StyleProps {}

const Modal = ({ children, ...props }: PropsWithChildren<Props>) => {
    return <ModalLayout {...props}>{children}</ModalLayout>;
};

const ModalLayout = styled("div")<StyleProps>`
    display: ${({ $ismodalon }) => ($ismodalon ? "flex" : "none")};
    position: absolute;
    background-color: ${({ backgroundcolor }) => backgroundcolor || "gray"};
    top: ${({ top }) => top || ""};
    right: ${({ right }) => right || ""};
    left: ${({ left }) => left || ""};
    width: ${({ width }) => width || 0};
    height: ${({ height }) => height || 0};
    padding: ${({ padding }) => padding || 0};
    border-radius: ${({ borderRadius }) => borderRadius ?? 0};
    /* transform: translate(-50%, -50%); */
    justify-content: center;
    align-items: center;
`;

export default Modal;
