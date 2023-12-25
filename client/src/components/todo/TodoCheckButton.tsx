import ITodo from "@/api/todo/Todo";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    todo: ITodo;
    idx: number;
    toggleDoneTodo: (idx: number) => void;
}

const TodoCheckButton = ({ todo, idx, toggleDoneTodo }: Props) => {
    return (
        <TodoCheckButtonLayout onClick={() => toggleDoneTodo(idx)}>
            {todo.isDone ? "O" : "X"}
        </TodoCheckButtonLayout>
    );
};

const TodoCheckButtonLayout = styled.button``;

export default TodoCheckButton;
