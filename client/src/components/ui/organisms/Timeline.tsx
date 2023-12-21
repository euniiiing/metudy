import { postsState } from "@/store/feeds/posts";
import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Timeline = () => {
    const [posts, setPosts] = useRecoilState(postsState);

    const getData = async () => {
        const res = await axios.get("http://localhost:3001/posts");
        setPosts(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <TimelineLayout>
            {posts.map((post, idx) => {
                return <TestPost key={idx}>{post.content}</TestPost>;
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
