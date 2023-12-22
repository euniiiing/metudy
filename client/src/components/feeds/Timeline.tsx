import React, { useCallback, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import axios from "axios";

import PostCard from "@/components/feeds/PostCard";
import { postsState } from "@/store/atoms/posts";
import { getGroupPosts, idxState } from "@/api/feeds/get-group-posts";
import { IPost } from "@/api/feeds/post";

const Timeline = () => {
    const [idx, setIdx] = useRecoilState(idxState);
    const posts: IPost[] = useRecoilValue(getGroupPosts);
    const target = useRef(null);

    const observer: any = useRef();
    const lastItemElementRef = (node: any) => {
        // if (loading) return;
        if (observer.current) observer.current.disconnect();
        console.log("??");
        observer.current = new IntersectionObserver(
            (entries, observer) => {
                if (entries[0].isIntersecting) {
                    observer.unobserve(entries[0].target);
                    console.log("hi");
                }
            },
            {
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: 1,
            }
        );
        console.log(node);
        observer.current.observe(node);
        // if (node) observer.current.observe(node);
    };

    return (
        <TimelineLayout>
            {posts.map((post, idx) => {
                if (idx === 6) {
                    console.log("6");
                    return <PostCard key={idx} post={post} ref={lastItemElementRef} />;
                    // return (
                    //     <div className="target" ref={lastItemElementRef}>
                    //         hihihihhihih
                    //     </div>
                    // );
                }
                return <PostCard key={idx} post={post} />;
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
