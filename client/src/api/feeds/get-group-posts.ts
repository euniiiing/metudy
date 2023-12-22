import axios from "axios";
import { atom, selector, selectorFamily } from "recoil";

export const feedsPageState = atom({
    key: "feedsPage",
    default: 0,
});

export const getGroupPosts = selector({
    key: "groupPosts/get",
    get: async ({ get }) => {
        try {
            const currentPage: number = get(feedsPageState);
            const { data } = await axios.get("http://localhost:8080/posts");
            console.log(data);
            return data;
        } catch (err) {
            throw err;
        }
    },
});
