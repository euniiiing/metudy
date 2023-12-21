import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import axios from "axios";

import PostContent from "@molecules/PostContent";
import { postsState } from "@store/feeds/posts";

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
                return <PostContent key={idx} post={post} />;
            })}
        </TimelineLayout>
    );
};

const TimelineLayout = styled.div`
    overflow: auto;
    height: calc(100% - 50px);
`;

export default Timeline;
