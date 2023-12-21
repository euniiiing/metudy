import { postsState } from "@/store/feeds/posts";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Timeline = () => {
    const [posts, setPosts] = useRecoilState(postsState);

    useEffect(() => {
        console.log("timeline");
    }, []);

    return (
        <TimelineLayout>
            {posts.map((post) => {
                return <TestPost>{post.content}</TestPost>;
            })}
        </TimelineLayout>
    );
};

const TimelineLayout = styled.div`
    overflow: auto;
    height: calc(100% - 50px);
`;

const TestPost = styled.div`
    background-color: aliceblue;
    margin: 15px;
    height: 120px;
`;

export default Timeline;
