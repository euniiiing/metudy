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

export default App;
