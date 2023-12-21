import { atom } from "recoil";
import { PostType } from "@/types";

export const myPostsState = atom<PostType>({
    key: "myposts",
    default: {
        postId: "e",
        userId: "성은",
        content: "다시 처음부터",
        image: ["./src/assets/images/Adam_run.png"],
    },
});
