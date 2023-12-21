import React, { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import { myPostsState } from "@/store/feeds/myPosts";
import styled from "styled-components";
import axios from "axios";

const PostingForm = () => {
    const [isSuccessUpload, setIsSuccessUpload] = useState<boolean>(false);
    const [postContent, setPostContent] = useState("hello");
    const [myPosts, setMyPosts] = useRecoilState(myPostsState);

    const uploadLog = async () => {
        try {
            const res = await axios.post("http://localhost:3001/posts", myPosts);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        console.log(postContent);
    }, [postContent]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("submit");
    };

    const inputRef = useRef<HTMLInputElement | null>(null);

    const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        console.log(e.target.files);
    }, []);

    const onUploadImageButtonClick = useCallback(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.click();
    }, []);

    return (
        <PostingFormLayout onSubmit={handleSubmit}>
            <div>Today's</div>
            <textarea
                value={postContent}
                className="postingform__content__input"
                onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
            <div className="postingform__actionbox">
                <input type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
                <button onClick={onUploadImageButtonClick}>upload</button>
                <button className="postingform__upload__button" onClick={uploadLog}>
                    게시하기
                </button>
            </div>
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled.form`
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
