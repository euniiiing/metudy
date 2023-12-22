import axios from "axios";
import { atom, selector } from "recoil";

export const idxState = atom({
    key: "idx",
    default: 0,
});

export const getGroupPosts = selector({
    key: "groupPosts/get",
    get: async ({ get }) => {
        try {
            get(idxState);
            const { data } = await axios.get("http://localhost:8080/posts");
            console.log(data);
            return data;
        } catch (err) {
            throw err;
        }
    },
});
