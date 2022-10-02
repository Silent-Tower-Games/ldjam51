import { v2 } from "../utils/v2";

export class Canvas {
    public canvas: HTMLCanvasElement;
    public zoom: number;
    
    constructor(public size: v2) {
        // Lol using `as` is horrible but this is a game jam
        this.canvas = document.getElementById('c') as HTMLCanvasElement;
        this.resize();
    }
    
    resize() {
        this.zoom = Math.min(
            (window.innerWidth - 16) / this.size.x,
            (window.innerHeight - 16) / this.size.y
        );
        
        if (this.zoom > 1) {
            this.zoom = Math.floor(this.zoom);
        }
        
        this.canvas.width = this.size.x * this.zoom;
        this.canvas.height = this.size.y * this.zoom;
    }
}
