import { atom } from "recoil";

import { IPost } from "@/api/feeds/post";

export const postsState = atom<IPost[]>({
    key: "posts",
    default: [],
});
