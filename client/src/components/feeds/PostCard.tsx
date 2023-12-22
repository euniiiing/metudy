import React, { forwardRef, useEffect } from "react";
import styled from "styled-components";

import ProfileImg from "@/assets/images/profile-img.jpg";
import { IPost } from "@/api/feeds/post";

interface Props {
    post: IPost;
}

const PostContent = forwardRef(({ post }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <PostContentLayout>
            <div className="postcontent-header" ref={ref}>
                <div className="profile-img">
                    <img src={ProfileImg} alt="" />
                </div>
                <div className="postcontent-inner-header">
                    <div className="user-id">karina</div>
                    <div className="created-date">2023.12.25</div>
                </div>
            </div>
            <div className="postcontent-main">
                <div className="post__content">{post.content}</div>
                <div className="container__images">
                    {post.image.length > 0 &&
                        post.image.map((x) => <img className="" src={x} alt=""></img>)}
                </div>
            </div>
        </PostContentLayout>
    );
});

const PostContentLayout = styled.div`
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 50px;
    margin-top: 20px;
    min-height: 100px;

    .postcontent-header {
        display: flex;
        margin: 10px;
    }

    .profile-img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-right: 10px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }

    .container__images {
        display: flex;
        z-index: 3;
        overflow: scroll;

        img {
            height: 300px;
            margin-right: 10px;
        }
    }

    .postcontent-main {
        margin: 10px;

        .post__content {
            margin-bottom: 10px;
        }
    }
    .created-date {
        color: gray;
        font-size: 13px;
        margin-top: 3px;
    }
`;

export default PostContent;
