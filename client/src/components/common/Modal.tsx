import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
    children: ReactNode;
    open: boolean;
    closeModal: () => void;
}

const Modal = ({ children, ...props }: ModalProps) => {
    const { open, closeModal } = props;

    return (
        <StyledModal open={open}>
            <button onClick={closeModal}>close</button>
            {children}
        </StyledModal>
    );
};

const StyledModal = styled.div<{ open: boolean }>`
    ${({ open }) => !open && `display:none;`}
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    z-index: 100;
`;

export default Modal;
