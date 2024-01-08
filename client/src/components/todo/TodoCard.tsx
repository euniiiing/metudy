import React, { useState } from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import TodoItem from "@/components/todo/TodoItem";
import Edit from "@/components/icons/Edit";
import Button from "../common/Button";

interface TodoCardProps {
    todoListOfDay: ITodo[];
}

const TodoCard = ({ todoListOfDay }: TodoCardProps) => {
    const isToday = (): boolean => {
        return true;
    };

    const [editingInProgress, setEditingInProgress] = useState<boolean>(false);
    const startEdit = () => {
        setEditingInProgress(true);
    };
    const FinishEdit = () => {
        setEditingInProgress(false);
    };

    return (
        <StyledTodoCard>
            <Header>
                <Day>01.02 월</Day>
                {isToday() &&
                    (editingInProgress ? (
                        <Button content="저장" onClick={FinishEdit} width="17px" height="17px" />
                    ) : (
                        <Button
                            content="수정"
                            Icon={Edit}
                            onClick={startEdit}
                            width="17px"
                            height="17px"
                        />
                    ))}
            </Header>
            {editingInProgress
                ? todoListOfDay.map((todo: ITodo, idx: number) => {
                      return (
                          <TodoItem key={idx} todo={todo} editingInProgress={editingInProgress} />
                      );
                  })
                : todoListOfDay.map((todo: ITodo, idx: number) => {
                      return (
                          <TodoItem key={idx} todo={todo} editingInProgress={editingInProgress} />
                      );
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

const EditTodo = styled.div`
    background-color: #e8e8e8;
    width: 300px;
    height: 400px;
`;

export default TodoCard;
