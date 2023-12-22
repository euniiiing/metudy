import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import PostCard from "@/components/feeds/PostCard";
import { getGroupPosts, feedsPageState } from "@/api/feeds/get-group-posts";
import { IPost } from "@/api/feeds/post";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const Timeline = () => {
    const [page, setPage] = useRecoilState(feedsPageState);
    const posts: IPost[] = useRecoilValue(getGroupPosts);
    const [data, setData] = useState<IPost[]>([]);

    useEffect(() => {
        if (page === 0) setData((curr: any) => [...posts]);
        else setData((curr: any) => [...curr, ...posts]);
    }, [page, posts]);

    const handleObserved = () => setPage(page + 1);
    const { lastItemElementRef } = useInfiniteScroll({ handleObserved });

    return (
        <TimelineLayout>
            {data.map((post: IPost, idx: any) => {
                if (idx % 6 === 0) {
                    return <PostCard key={idx} post={post} />;
                }
                return <PostCard key={idx} post={post} ref={lastItemElementRef} />;
            })}
        </TimelineLayout>
    );
};

const TimelineLayout = styled.div`
    overflow: auto;
    height: calc(100% - 50px);

    .target {
        background-color: #3e454b;
        height: 10px;
    }
`;

export default Timeline;
