import { App } from "./App";

export function init(): void
{
    (window as any).CurrentAppGameInstance = new App();
}

export function u()
{
    return (window as any).CurrentAppGameInstance;
}
