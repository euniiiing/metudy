import ITodo from "@/api/todo/Todo";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    todo: ITodo;
}

const TodoCheckButton = ({ todo }: Props) => {
    const [isDone, setIsDone] = useState<boolean>(false);

    const toggleDoneTodo = () => {
        setIsDone(!isDone);
    };

    return (
        <TodoCheckButtonLayout onClick={toggleDoneTodo}>{isDone ? "O" : "X"}</TodoCheckButtonLayout>
    );
};

const TodoCheckButtonLayout = styled.button``;

export default TodoCheckButton;
