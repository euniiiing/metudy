import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import ITodo from "@/api/todo/Todo";
import Do from "@/components/icons/Do";
import Done from "@/components/icons/Done";
import Button from "@/components/common/Button";
import { useUpdateTodo } from "@/queries/useUpdateTodo";

interface Props {
    todo: ITodo;
    editingInProgress: boolean;
}

const TodoItem = ({ todo, editingInProgress }: Props) => {
    const mutation = useUpdateTodo();

    const deleteItem = () => {
        mutation.mutate();
    };

    return (
        <StyledTodoItem>
            {editingInProgress ? (
                <>
                    <Button
                        content={"휴지통"}
                        onClick={deleteItem}
                        width="30px"
                        height="30px"
                    ></Button>
                    <input type="text" defaultValue={todo.content} />
                </>
            ) : (
                <>
                    <Button
                        content={"체크"}
                        onClick={() => {}}
                        Icon={todo.isDone ? Done : Do}
                        width="30px"
                        height="30px"
                    ></Button>
                    <TodoContent>{todo.content}</TodoContent>
                </>
            )}
        </StyledTodoItem>
    );
};

const StyledTodoItem = styled.div`
    display: flex;
    margin-top: 10px;
`;

const TodoContent = styled.div`
    padding-top: 2px;
`;

export default TodoItem;
