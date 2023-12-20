import React, { useState } from "react";
import styled from "styled-components";

import Main from "@pages/Main";
import Modal from "@common/organisms/Modal";

function App() {
    const [isModalOn, setIsModalOn] = useState<boolean>(true);
    const modalBtn = () => {
        console.log("modal-on");
        setIsModalOn(!isModalOn);
    };
    return (
        <>
            <Modal $ismodalon={isModalOn} width={"700px"} height="80vh">
                <TestLayout></TestLayout>
            </Modal>
            <Button onClick={modalBtn}>modal on</Button>
            <Main />
        </>
    );
}

const TestLayout = styled.div`
    width: 80%;
    height: 90%;
    background-color: aliceblue;
    top: 40px;
    left: 40px;
`;

const Button = styled.button`
    position: absolute;
`;

export default App;
