import React, { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { myPostsState } from "@/store/feeds/myPosts";
import styled from "styled-components";

const PostingForm = () => {
    const [isSuccessUpload, setIsSuccessUpload] = useState<boolean>(false);

    const [myPosts, setMyPosts] = useRecoilState(myPostsState);

    const writeLog = (e: ChangeEvent<HTMLInputElement>) => {
        setMyPosts({
            id: "what",
            content: e.target.value,
        });
    };

    const uploadLog = () => {
        setTimeout(() => {
            setIsSuccessUpload(true); // 업로드 성공
        }, 2000);
    };

    useEffect(() => {
        console.log(myPosts);
    }, [myPosts]);

    return (
        <PostingFormLayout>
            <div>Today's</div>
            <textarea className="postingform__content__input"></textarea>
            <div className="postingform__actionbox">
                <button className="postingform__upload__button" onClick={uploadLog}>
                    게시하기
                </button>
            </div>
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled.div`
    height: 200px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    .postingform__content__input {
        display: block;
        width: 90%;
        height: 110px;
        padding: 10px;
        box-sizing: border-box;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid #c5c5c5;
        outline-color: #fe6b8b;
    }

    .postingform__actionbox {
        width: 100%;
        text-align: end;
    }

    .postingform__upload__button {
        right: 0;
        bottom: 0;
    }
`;

export default PostingForm;
