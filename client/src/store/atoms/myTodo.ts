import { atom } from "recoil";

import ITodo from "@/api/todo/Todo";

export const myTodoState = atom<ITodo[]>({
    key: "myTodo",
    default: [],
});
