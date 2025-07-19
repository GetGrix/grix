// Simple event bus for plugin communication
export class EventBus {
    constructor() {
        this.listeners = new Map();
    }
    on(event, handler) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(handler);
    }
    off(event, handler) {
        const handlers = this.listeners.get(event);
        if (handlers) {
            const index = handlers.indexOf(handler);
            if (index > -1) {
                handlers.splice(index, 1);
            }
        }
    }
    emit(event, data) {
        const handlers = this.listeners.get(event);
        if (handlers) {
            handlers.forEach(handler => {
                try {
                    handler(data);
                }
                catch (error) {
                    console.error(`Error in event handler for ${event}:`, error);
                }
            });
        }
    }
    clear() {
        this.listeners.clear();
    }
    // Get all events (useful for debugging)
    getEvents() {
        return Array.from(this.listeners.keys());
    }
    // Get listener count for an event
    getListenerCount(event) {
        return this.listeners.get(event)?.length || 0;
    }
}
