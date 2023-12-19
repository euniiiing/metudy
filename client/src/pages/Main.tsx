import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import usePlayer from "@hooks/usePlayer";

const Main: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [initPlayer] = usePlayer(canvasRef);

    const initCanvas = useCallback(() => {
        if (!canvasRef.current) return;
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        initPlayer();
    }, [initPlayer]);

    useEffect(() => {
        initCanvas();
        window.addEventListener("resize", () => initCanvas());
    }, [initCanvas]);

    return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Main;
