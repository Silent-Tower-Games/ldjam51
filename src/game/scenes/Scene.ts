import { IActionable } from "../IActionable";

export class Scene implements IActionable {
    step(): void {
        console.log('running');
    }
    
    draw(): void {
        console.log('drawing');
    }
}
