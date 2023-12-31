import React, { ReactNode } from "react";
import styled from "styled-components";

interface IMainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return <StyledMainLayout>{children}</StyledMainLayout>;
};

const StyledMainLayout = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
`;

export default MainLayout;
