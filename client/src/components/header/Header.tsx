import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@/components/common/Modal";
import Todo from "@/components/todo/Todo";
import { TodoList } from "../todo/TodoList";
import { useRecoilValue } from "recoil";
import { getMyTodoList } from "@/api/todo/get-my-todoList";
import ITodo from "@/api/todo/Todo";

const Header = () => {
    const [modalOn, setModalOn] = useState<boolean>(false);

    return (
        <HeaderLayout>
            <button onClick={() => setModalOn(!modalOn)}>todo</button>
            {modalOn && (
                <Modal
                    $ismodalon={modalOn}
                    backgroundcolor="pink"
                    width="300px"
                    height="200px"
                    top="4em"
                    right="1em"
                >
                    <Todo>
                        <StyledTodoHeader>todo</StyledTodoHeader>
                        <TodoList haveProgressButton={true} />
                    </Todo>
                </Modal>
            )}
        </HeaderLayout>
    );
};

const HeaderLayout = styled.div`
    position: fixed;
    width: 100%;
    height: 3em;
    background-color: aliceblue;
`;

const StyledTodoHeader = styled.div`
    background-color: aliceblue;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    text-align: center;
    padding-top: 8px;
`;

export default Header;
