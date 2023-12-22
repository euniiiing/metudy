import { RefObject, useEffect, useRef, useState } from "react";

import Player from "@canvas/player";

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
    const player = useRef<Player | null>(null);
    const idx = useRef<number>(0);

    const initPlayer = () => {
        if (!player || !canvasRef) return;
        player.current = new Player(canvasRef);
    };
    canvasRef?.current?.getContext("2d");
    useEffect(() => {
        // function isKeyType(arg: string): number {
        //     return ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].findIndex((type) => type === arg);
        // }
        // const onKeydown = (e: KeyboardEvent) => {
        //     const keyIdx = isKeyType(e.code);
        //     if (this.timerId || keyIdx === -1) return;
        //     this.sy = keyIdx + 4;
        //     this.keysPressed[e.code] = true;
        //     this.timerId = setInterval(() => {
        //         this.sx += 1;
        //         if (this.sx === 8) this.sx = 0;
        //         this.animate(this.canvas.getContext('2d'));
        //     }, this.velocity);
        // };
        // const onKeyup = (e: KeyboardEvent) => {
        //     console.log(this.timerId);
        //     if (isKeyType(e.code) !== -1) {
        //         clearInterval(this.timerId);
        //         this.timerId = null;
        //         this.sx = 0;
        //         this.keysPressed[e.code] = false;
        //     }
        // };
    }, [canvasRef, idx]);

    return [initPlayer];
};

export default usePlayer;
