import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Main from "@pages/Main";
import Feeds from "@pages/Feeds";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/header/Header";
import theme from "@/style/theme";

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/feeds/*" element={<Feeds />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
