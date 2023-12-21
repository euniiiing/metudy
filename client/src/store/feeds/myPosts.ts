import { atom } from "recoil";
import { PostType } from "@/types";

export const myPostsState = atom<PostType>({
    key: "myposts",
    default: { id: "seongeun", content: "", image: "" },
});
