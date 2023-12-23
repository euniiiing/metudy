import React, {
    MouseEventHandler,
    PropsWithChildren,
    ReactNode,
    Suspense,
    useEffect,
    useState,
} from "react";
import ITodo from "@/api/todo/Todo";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { getMyTodoList } from "@/api/todo/get-my-todoList";

interface IProps {
    children?: ReactNode;
    makeDiarySticker?: MouseEventHandler<HTMLDivElement>;
}

const TodoList = ({ children, makeDiarySticker }: IProps) => {
    const todoList: ITodo[] = useRecoilValue(getMyTodoList);

    const getComponent = (children: ReactNode, componentName: string): ReactNode => {
        return React.Children.toArray(children).find(
            (child: any) => child.type.name === componentName
        );
    };

    const TodoCheckButton = getComponent(children, "TodoCheckButton");
    const TodoProgressButton = getComponent(children, "TodoProgressButton");
    const TodoContent = getComponent(children, "TodoContent");

    return (
        <TodoListLayout>
            {todoList.map((todo: ITodo) => {
                return (
                    <TodoCard>
                        {TodoCheckButton && <>{TodoCheckButton}</>}
                        {TodoContent && <>{TodoContent}</>}
                        {TodoProgressButton && <>{TodoProgressButton}</>}
                    </TodoCard>
                );
            })}
        </TodoListLayout>
    );
};

const TodoListLayout = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
`;

const TodoCard = styled.div`
    margin: 10px;
    display: flex;

    &:hover {
        cursor: pointer;
    }
`;

export default TodoList;
