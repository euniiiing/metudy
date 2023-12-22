import React, { Suspense, useRef, useState } from "react";
import styled from "styled-components";
import MyFeeds from "@/components/feeds/MyFeeds";
import Timeline from "@/components/feeds/Timeline";
import { postsState } from "@/store/atoms/posts";
import { useRecoilState } from "recoil";
import HeaderLogo from "@/assets/images/feeds-header.png";

const Feeds = () => {
    const [onMypage, setOnMypage] = useState<boolean>(false);

    return (
        <FeedsLayout>
            <ButtonBox>
                <button className="select__btn" onClick={() => setOnMypage(false)}>
                    group
                </button>
                <button className="select__btn" onClick={() => setOnMypage(true)}>
                    my
                </button>
            </ButtonBox>
            <div className="feeds__container">
                <FeedsHeader>
                    <img src={HeaderLogo} alt="" />
                </FeedsHeader>
                <Suspense fallback={<>... loading</>}>
                    {onMypage ? <MyFeeds /> : <Timeline />}
                </Suspense>
            </div>
        </FeedsLayout>
    );
};

const FeedsLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .feeds__container {
        width: 500px;
        height: 90vh;
        padding: 1em;
        background-color: white;
        border-radius: 1em;
    }
`;

const FeedsHeader = styled.div`
    height: 40px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e3e3e3;

    img {
        width: 120px;
    }
`;

const ButtonBox = styled.div`
    height: 100%;
    margin: 4em 1em 0 0;
    display: flex;
    flex-direction: column;

    .select__btn {
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        margin-bottom: 10px;
        background-color: white;
        cursor: pointer;

        &:hover {
            background-color: #c5c5c5;
        }
    }
`;

export default Feeds;
