import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@/components/common/Modal";
import Todo from "@/components/todo/Todo";

const Header = () => {
    const [modalOn, setModalOn] = useState<boolean>(false);

    return (
        <HeaderLayout>
            <button onClick={() => setModalOn(!modalOn)}>todo</button>
            {modalOn && (
                <Modal
                    $ismodalon={modalOn}
                    backgroundcolor="pink"
                    width="300px"
                    height="200px"
                    top="4em"
                    right="1em"
                >
                    {/* <Todo /> */}
                </Modal>
            )}
        </HeaderLayout>
    );
};

const HeaderLayout = styled.div`
    position: fixed;
    width: 100%;
    height: 3em;
    background-color: aliceblue;
`;

export default Header;
