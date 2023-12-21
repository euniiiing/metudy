import React, { useRef, useState } from "react";
import styled from "styled-components";
import MyFeeds from "@organisms/MyFeeds";
import Timeline from "@organisms/Timeline";
import { postsState } from "@store/feeds/posts";
import { useRecoilState } from "recoil";

const Feeds = () => {
    const [onMypage, setOnMypage] = useState<boolean>(false);

    return (
        <FeedsLayout>
            <div className="feeds__container">
                <FeedsHeader>
                    <button onClick={() => setOnMypage(false)}>group</button>
                    <button onClick={() => setOnMypage(true)}>mypage</button>
                </FeedsHeader>
                {onMypage ? <MyFeeds /> : <Timeline />}
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
    background-color: #f5f5f5;

    .feeds__container {
        width: 500px;
        height: 90vh;
    }
`;

const FeedsHeader = styled.div`
    height: 45px;
    border-bottom: 1px solid #c5c5c5;
`;

export default Feeds;
