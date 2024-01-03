import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Main from "@pages/Main";
import Todo from "@/pages/Todo";
import Feeds from "@pages/Feeds";
import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/Header";
import theme from "@/style/theme";

function App() {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <MainLayout>
                        <BrowserRouter>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/todo/*" element={<Todo />} />
                                <Route path="/feeds/*" element={<Feeds />} />
                            </Routes>
                        </BrowserRouter>
                    </MainLayout>
                </ThemeProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
