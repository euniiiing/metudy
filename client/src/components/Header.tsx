import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface pageInfo {
    title: string;
    link: string;
}

const pages: pageInfo[] = [
    { title: "홈", link: "/" },
    { title: "투두", link: "/todo" },
];

const Header = () => {
    return (
        <StyledHeader>
            {pages.map(({ title, link }, idx) => {
                return <Link to={link}>{title}</Link>;
            })}
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    position: sticky;
    width: 100%;
    height: 3em;
    background-color: aliceblue;
`;

export default Header;
