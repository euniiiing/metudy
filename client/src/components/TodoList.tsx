import React from "react";
import styled from "styled-components";

import TodoCard from "@/components/todo/TodoCard";
import useGetMyTodo from "@/queries/useGetMyTodo";

interface IProps {}

const TodoList = ({}: IProps) => {
    const { data, isLoading } = useGetMyTodo();

    return (
        <TodoListLayout>
            <VLine />
            <HeaderOfMonth>JAN, 2024</HeaderOfMonth>
            {data?.map((todoListOfDay, day) => {
                return (
                    <TodoCardWrapper key={day}>
                        {day % 2 === 0 ? (
                            <>
                                <TodoCard todoListOfDay={todoListOfDay} />
                                <Dot />
                                <FakeCard />
                            </>
                        ) : (
                            <>
                                <FakeCard />
                                <Dot />
                                <TodoCard todoListOfDay={todoListOfDay} />
                            </>
                        )}
                    </TodoCardWrapper>
                );
            })}
        </TodoListLayout>
    );
};

interface StyleProps {
    order: number;
}

const TodoListLayout = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VLine = styled.div`
    position: absolute;
    border-right: 2px solid #dbdbdb;
    height: 100%;
`;

const HeaderOfMonth = styled.div`
    background-color: #59a257;
    width: 110px;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    font-size: 17px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    z-index: 1;
    margin-bottom: 30px;
`;

const TodoCardWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

const FakeCard = styled.div`
    visibility: hidden;
    box-sizing: border-box;
    width: 46%;
    background-color: white;
    padding: 13px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #6d6d6d;
    border-radius: 100%;
    z-index: 1;
`;

export default TodoList;
