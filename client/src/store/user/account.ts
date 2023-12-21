import { atom } from "recoil";

import { PostType } from "@/types";

export const postsState = atom<PostType[]>({
    key: "posts",
    default: [],
});
