import React, { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import axios from "axios";
import { postingFormState } from "@/store/atoms/postingForm";

const PostingForm = () => {
    const [content, setContent] = useState("");
    const [postContent, setPostContent] = useRecoilState(postingFormState);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/myposts", {
                postContent: "postContent",
            });
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <PostingFormLayout onSubmit={handleSubmit}>
            <textarea
                className="postingform__content__input"
                onChange={(e) => setContent(e.target.value)}
                placeholder="오늘 하루는 어땠나요?"
            ></textarea>
            <div className="postingform__actionbox">
                <button className="postingform__upload__button">upload</button>
            </div>
        </PostingFormLayout>
    );
};

const PostingFormLayout = styled.form`
    height: 180px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    .postingform__content__input {
        display: block;
        width: 100%;
        height: 110px;
        padding: 10px;
        box-sizing: border-box;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid #c5c5c5;
        outline-color: #ffa0b4;
    }

    .postingform__actionbox {
        width: 100%;
        text-align: end;
    }

    .postingform__upload__button {
        cursor: pointer;
        right: 0;
        bottom: 0;
        width: 80px;
        height: 25px;
        background-color: #fe6b8b;
        color: white;
        border: none;
        border-radius: 1em;
        padding-top: 2px;

        &:hover {
            background-color: gray;
            color: black;
        }
    }
`;

export default PostingForm;
