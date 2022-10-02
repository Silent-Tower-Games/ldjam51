import { Canvas } from "./boilerplate/Canvas";
import { Input } from "./boilerplate/Input";
import { Scene } from "./game/scenes/Scene";

export class App {
    public canvas: Canvas;
    public input: Input;
    public scene: Scene | null = null;
    
    constructor() {
        this.canvas = new Canvas({ x: 320, y: 180 });
        this.input = new Input();
        
        window.addEventListener('resize', () => {
            this.canvas.resize();
        })
        
        setInterval(() => {
            this.scene?.step();
            this.scene?.draw();
        }, 1000 / 60);
    }
}
