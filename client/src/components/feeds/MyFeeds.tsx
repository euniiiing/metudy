import React, { useEffect } from "react";
import PostingForm from "@/components/PostingForm";
import { useRecoilValue } from "recoil";
import { getMyPosts } from "@/api/feeds/get-my-posts";

const MyFeeds = () => {
    const queryResults = useRecoilValue(getMyPosts);

    return <></>;
};

export default MyFeeds;
