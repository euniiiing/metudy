import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import usePlayer from "@hooks/usePlayer";

const Main: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [initPlayer] = usePlayer(canvasRef);

    const initCanvas = useCallback(() => {
        if (!canvasRef.current) return;
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    }, []);

    useEffect(() => {
        initCanvas();
        initPlayer();

        window.addEventListener("resize", () => {
            initCanvas();
            initPlayer(); // TODO: 초기화 최소화
        });
    }, [initCanvas, initPlayer]);

    return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Main;
