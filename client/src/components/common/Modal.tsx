import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
    children: ReactNode;
    $ismodalon: boolean;
}

const Modal = ({ children, ...props }: ModalProps) => {
    return <StyledModal {...props}>{children}</StyledModal>;
};

const StyledModal = styled.div<{ $ismodalon: boolean }>`
    display: ${({ $ismodalon }) => ($ismodalon ? "flex" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    z-index: 100;
`;

export default Modal;
