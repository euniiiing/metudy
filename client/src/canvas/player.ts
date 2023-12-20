// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

import { RefObject } from "react";
import characterImg from "../assets/images/Adam_run.png";

interface CanvasRenderImg {
    image: HTMLImageElement;
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
    dx: number;
    dy: number;
    dWidth: number;
    dHeight: number;
}

export default class Player {
    canvas: HTMLCanvasElement | null;
    context: CanvasRenderingContext2D | null | undefined;
    canvasRenderImg: CanvasRenderImg;
    imgIdx: number;
    timerId: NodeJS.Timer | null;

    constructor(canvasRef: RefObject<HTMLCanvasElement>) {
        const imageObj = new Image();
        imageObj.src = characterImg;

        this.canvas = canvasRef.current;
        this.context = this.canvas?.getContext("2d");
        this.canvasRenderImg = {
            image: imageObj,
            sx: (imageObj.width / 24) * 20,
            sy: 0,
            sWidth: imageObj.width / 24,
            sHeight: imageObj.height,
            dx: 0,
            dy: 0,
            dWidth: (imageObj.width / 24) * 1.7,
            dHeight: imageObj.height * 1.7,
        };
        this.imgIdx = 0;
        this.timerId = null;
        this.setEvent();
        this.render();
    }

    private clear = () => {
        this.context?.clearRect(
            this.canvasRenderImg.dx,
            this.canvasRenderImg.dy,
            this.canvasRenderImg.dWidth,
            this.canvasRenderImg.dHeight
        );
    };

    private render = () => {
        this.context?.drawImage(
            this.canvasRenderImg.image,
            this.canvasRenderImg.sx,
            this.canvasRenderImg.sy,
            this.canvasRenderImg.sWidth,
            this.canvasRenderImg.sHeight,
            this.canvasRenderImg.dx,
            this.canvasRenderImg.dy,
            this.canvasRenderImg.dWidth,
            this.canvasRenderImg.dHeight
        );
    };

    private move = (keyType: number) => {
        // right: 0 ~ 5
        // up: 6 ~ 11
        // left: 12 ~ 17
        // down: 18 ~ 23
        switch (keyType) {
            case 0:
                this.canvasRenderImg.sx = (this.canvasRenderImg.image.width / 24) * this.imgIdx;
                this.imgIdx += 1;
                if (this.imgIdx > 5) this.imgIdx = 0;
                this.canvasRenderImg.dx += 5;
                break;
            case 1:
                this.canvasRenderImg.sx = (this.canvasRenderImg.image.width / 24) * this.imgIdx;
                this.imgIdx += 1;
                if (this.imgIdx > 11) this.imgIdx = 6;
                this.canvasRenderImg.dy -= 5;
                break;
            case 2:
                this.canvasRenderImg.sx = (this.canvasRenderImg.image.width / 24) * this.imgIdx;
                this.imgIdx += 1;
                if (this.imgIdx > 17) this.imgIdx = 12;
                this.canvasRenderImg.dx -= 5;
                break;
            case 3:
                this.canvasRenderImg.sx = (this.canvasRenderImg.image.width / 24) * this.imgIdx;
                this.imgIdx += 1;
                if (this.imgIdx > 23) this.imgIdx = 18;
                this.canvasRenderImg.dy += 5;
                break;
        }
    };

    private animate = (keyType: number) => {
        this.clear();
        this.move(keyType);
        this.render();
    };

    private getKeyType = (e: KeyboardEvent): number => {
        return ["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"].findIndex(
            (type) => type === e.code
        );
    };

    private setEvent = () => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (this.timerId) return;
            switch (this.getKeyType(e)) {
                case 0:
                    this.imgIdx = 0;
                    break;
                case 1:
                    this.imgIdx = 6;
                    break;
                case 2:
                    this.imgIdx = 12;
                    break;
                case 3:
                    this.imgIdx = 18;
                    break;
            }
            this.timerId = setInterval(() => this.animate(this.getKeyType(e)), 100);
        };
        const handleKeyUp = () => {
            if (!this.timerId) return;
            clearInterval(this.timerId);
            this.timerId = null;
            this.canvasRenderImg.sx = (this.canvasRenderImg.image.width / 24) * 20;
            this.imgIdx = 0;
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
    };
}
