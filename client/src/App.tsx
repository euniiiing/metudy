import React, { useState } from "react";
import styled from "styled-components";

import Main from "@pages/Main";
import Feeds from "@pages/Feeds";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <RecoilRoot>
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
