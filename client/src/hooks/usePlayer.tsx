import { RefObject, useEffect, useState } from "react";

import userImg from "../assets/images/Adam_run.png";
const imageObj = new Image();
imageObj.src = userImg;

interface Props {
    canvasRef: HTMLCanvasElement | null;
}
type ReturnTypes = [() => void];

/**
 *  1. canvas에 플레이어 올리기
 *  2. 플레이어 동작 소켓 전송
 *  3. canvas resize에 반응
 */
const usePlayer = (canvasRef: RefObject<HTMLCanvasElement> | null): ReturnTypes => {
    const [playerInfo, setPlayerInfo] = useState();

    const initPlayer = () => {
        if (!canvasRef?.current) return;
        const context = canvasRef?.current.getContext("2d");
        context?.drawImage(
            imageObj,
            (imageObj.width / 24) * 6,
            0,
            imageObj.width / 24,
            imageObj.height,
            100,
            100,
            (imageObj.width / 24) * 1.5,
            imageObj.height * 1.5
        );
    };

    useEffect(() => {
        console.log(canvasRef?.current?.width);
    }, [canvasRef]);

    return [initPlayer];
};

export default usePlayer;
