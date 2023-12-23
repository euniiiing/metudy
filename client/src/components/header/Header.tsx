import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@/components/common/Modal";
import Todo from "@/components/todo/Todo";
import { TodoList } from "../todo/TodoList";

const Header = () => {
    const [modalOn, setModalOn] = useState<boolean>(true);

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
                        <TodoList.CheckButton />
                        <TodoList.Content />
                        <TodoList.ProgressButton />
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

export default Header;
