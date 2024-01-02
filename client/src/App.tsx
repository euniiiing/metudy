import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "@pages/Main";
import Todo from "@/pages/Todo";
import Feeds from "@pages/Feeds";
import LookBack from "@/pages/LookBack";
import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/Header";
import theme from "@/style/theme";

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <MainLayout>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/todo/*" element={<Todo />} />
                            <Route path="/feeds/*" element={<Feeds />} />
                            <Route path="/lookback/*" element={<LookBack />} />
                        </Routes>
                    </BrowserRouter>
                </MainLayout>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
