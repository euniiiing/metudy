import ITodo from "@/api/todo/Todo";
import React from "react";

interface Props {
    todo: ITodo;
}

const TodoProgressButton = ({ todo }: Props) => {
    return <button>TodoProgressButton</button>;
};

export default TodoProgressButton;
