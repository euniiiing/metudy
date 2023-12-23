import React, { MouseEventHandler, ReactNode } from "react";

import TodoCheckButton from "@/components/todo/TodoCheckButton";
import TodoContent from "@/components/todo/TodoContent";
import TodoProgressButton from "@/components/todo/TodoProgressButton";
import styled from "styled-components";
import ITodo from "@/api/todo/Todo";

interface Props {
    children?: ReactNode;
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const TodoCardMain = ({ children }: Props) => {
    const getComponent = (children: ReactNode, componentName: string): ReactNode => {
        return React.Children.toArray(children).find(
            (child: any) => child.type.name === componentName
        );
    };

    const TodoCheckButton = getComponent(children, "TodoCheckButton");
    const TodoProgressButton = getComponent(children, "TodoProgressButton");
    const TodoContent = getComponent(children, "TodoContent");

    return (
        <TodoCardLayout>
            {TodoCheckButton && <>{TodoCheckButton}</>}
            {TodoContent && <>{TodoContent}</>}
            {TodoProgressButton && <>{TodoProgressButton}</>}
        </TodoCardLayout>
    );
};

const TodoCardLayout = styled.div`
    margin: 10px;
    display: flex;

    &:hover {
        cursor: pointer;
    }
`;

export const TodoCard = Object.assign(TodoCardMain, {
    CheckButton: TodoCheckButton,
    Content: TodoContent,
    ProgressButton: TodoProgressButton,
});
