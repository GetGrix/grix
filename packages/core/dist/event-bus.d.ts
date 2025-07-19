export declare class EventBus {
    private listeners;
    on(event: string, handler: Function): void;
    off(event: string, handler: Function): void;
    emit(event: string, data?: any): void;
    clear(): void;
    getEvents(): string[];
    getListenerCount(event: string): number;
}
