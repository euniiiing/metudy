import { atom } from "recoil";

import ITodo from "@/api/todo/Todo";

export const todo = atom<ITodo[]>({
    key: "todo",
    default: [],
});
