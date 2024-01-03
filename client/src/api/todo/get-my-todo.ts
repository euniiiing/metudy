import axios from "axios";
import ITodo from "./Todo";

const testData: ITodo[][] = [
    [
        { id: 1, content: "메인페이지 UI 설계", isDone: false },
        { id: 1, content: "2주차 스프린트 회의", isDone: true },
        { id: 2, content: "백엔드 ERD 회의", isDone: true },
    ],
    [
        { id: 1, content: "메인페이지 UI 설계", isDone: false },
        { id: 1, content: "마이페이지 API", isDone: true },
        { id: 1, content: "마이페이지 UI 설계", isDone: false },
        { id: 1, content: "2주차 스프린트 회의", isDone: true },
        { id: 2, content: "백엔드 ERD 회의", isDone: true },
    ],
    [
        { id: 1, content: "메인페이지 UI 설계", isDone: false },
        { id: 1, content: "2주차 스프린트 회의", isDone: true },
        { id: 2, content: "백엔드 ERD 회의", isDone: true },
    ],
];

export const getMyTodo = async () => {
    return testData;
};
