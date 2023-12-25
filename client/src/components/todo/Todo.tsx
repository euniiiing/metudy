import React, { MouseEventHandler, ReactNode, useState } from "react";
import styled from "styled-components";

import { TodoList } from "@/components/todo/TodoList";

interface Props {
    children?: ReactNode;
}

const Todo = ({ children }: Props) => {
    return <TodoLayout>{children}</TodoLayout>;
};

const TodoLayout = styled.div`
    width: 100%;
`;

export default Todo;
