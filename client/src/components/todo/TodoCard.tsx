import React, { useState } from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import TodoItem from "@/components/todo/TodoItem";
import Edit from "@/components/icons/Edit";
import Modal from "../common/Modal";

interface TodoCardProps {
    todoListOfDay: ITodo[];
}

const TodoCard = ({ todoListOfDay }: TodoCardProps) => {
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);

    const isToday = (): boolean => {
        return true;
    };

    return (
        <StyledTodoCard>
            <Modal $ismodalon={openEditModal}>edit todo</Modal>
            <Header>
                <Day>01.02 월</Day>
                {isToday() && (
                    <EditButton onClick={() => setOpenEditModal(true)}>
                        <Edit />
                    </EditButton>
                )}
            </Header>
            {todoListOfDay.map((todo: ITodo, idx: number) => {
                return <TodoItem todo={todo} key={idx} />;
            })}
        </StyledTodoCard>
    );
};

const StyledTodoCard = styled.div`
    box-sizing: border-box;
    width: 46%;
    background-color: white;
    padding: 13px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 7px;
    border-bottom: 1px solid #dbdbdb;
`;

const Day = styled.span`
    color: #575757;
    font-weight: bold;
`;

const EditButton = styled.button`
    right: 13px;
    top: 9px;
    background-color: transparent;
    border: none;
`;

export default TodoCard;
