import React, { useState } from "react";

import Main from "@pages/Main";
import Modal from "@common/organisms/Modal";

function App() {
    const [isModalOn, setIsModalOn] = useState<boolean>(true);
    const modalBtn = () => {
        console.log("modal-on");
        setIsModalOn(!isModalOn);
    };
    return (
        <>
            <Modal width="100px" $ismodalon={isModalOn}>
                hi
            </Modal>
            <button onClick={modalBtn}>modal on</button>
            <Main />
        </>
    );
}

export default App;
