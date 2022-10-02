export enum InputKeyState {
    Up,
    Pressed,
    Down,
    Relesed,
};

export class Input {
    public keys: {[key: string]: number} = {};
    public states: {[key: string]: InputKeyState} = {};
    
    constructor() {
        const event = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            const value = event.type === 'keydown'
                ? ((this.keys[key] ?? 1) + 1)
                : 0;
            
            this.keys[key] = value;
            
            console.log(`${key} = ${this.keys[key]}`);
        };
        
        window.addEventListener('keydown', event);
        window.addEventListener('keyup', event);
    }
    
    step(): void {
        // TODO: this doesn't do much yet
        for(const key of Object.keys(this.keys)) {
            let state: InputKeyState = (this.keys[key] ?? 0)
                ? InputKeyState.Down
                : InputKeyState.Up;
            
            this.states[key] = state;
        }
    }
}
