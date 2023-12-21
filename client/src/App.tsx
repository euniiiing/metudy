import React, { useState } from "react";
import styled from "styled-components";

import Main from "@pages/Main";
import Modal from "@common/organisms/Modal";
import Feeds from "@pages/Feeds";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const [isModalOn, setIsModalOn] = useState<boolean>(true);
    const modalBtn = () => {
        console.log("modal-on");
        setIsModalOn(!isModalOn);
    };
    return (
        <RecoilRoot>
            {/* <Modal $ismodalon={isModalOn} width="500px" height="90vh">
                <Feeds />
            </Modal> */}
            {/* <Button onClick={modalBtn}>modal on</Button> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/feeds/*" element={<Feeds />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
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
