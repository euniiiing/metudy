import axios from "axios";
import { atom, selector } from "recoil";
import ITodo from "./Todo";
import { myTodoState } from "@/store/atoms/myTodo";

export const getMyTodoList = selector({
    key: "myTodoList/get",
    get: async ({ get }) => {
        try {
            // const { data } = await axios.get("http://localhost:8080/todo");
            // return data;
            return [
                {
                    content: "밥 먹기",
                    progress: 0,
                    isDone: false,
                },
                {
                    content: "양치하기",
                    progress: 0,
                    isDone: true,
                },
                {
                    content: "샤워하기",
                    progress: 0,
                    isDone: true,
                },
            ];
        } catch (err) {
            throw err;
        }
    },
});
