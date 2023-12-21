import { atom } from "recoil";

import { PostType } from "@/types";

export const postsState = atom<PostType[]>({
    key: "posts",
    default: [
        { id: "소금", content: "소금빵" },
        { id: "초코", content: "초코빵" },
        { id: "소금", content: "소금빵" },
        { id: "초코", content: "초코빵" },
        { id: "소금", content: "소금빵" },
        { id: "초코", content: "초코빵" },
        { id: "소금", content: "소금빵" },
        { id: "초코", content: "초코빵" },
        { id: "소금", content: "소금빵" },
        { id: "초코", content: "초코빵" },
        { id: "소금", content: "소금빵" },
        { id: "초코", content: "초코빵" },
    ],
});
