import React, { useEffect } from "react";
import PostingForm from "@/components/feeds/PostingForm";
import { useRecoilValue } from "recoil";
import { getMyPosts } from "@/api/feeds/get-my-posts";

const MyFeeds = () => {
    const queryResults = useRecoilValue(getMyPosts);

    return <PostingForm />;
};

export default MyFeeds;
