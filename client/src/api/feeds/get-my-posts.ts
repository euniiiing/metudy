import axios from "axios";
import { selector } from "recoil";

export const getMyPosts = selector({
    key: "myPosts/get",
    get: async ({ get }) => {
        try {
            const { data } = await axios.get("http://localhost:8080/posts");
            console.log(data);
            return data;
        } catch (err) {
            throw err;
        }
    },
});
